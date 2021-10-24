const express = require("express");
var cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 3001;
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var admin = require("firebase-admin");
const serviceAccount = require("/app/APIkey/succulent-bfbf4-firebase-adminsdk-f8i79-c3a8d470e1.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://succulent-bfbf4.firebaseio.com",
});
const db = admin.firestore();
admin.auth();
admin.database();

// create todo
app.post("/push_data_to_db", (req, res) => {
  (async () => {
    try {
      await db
        .collection(req.body.userUid)
        .doc("todos")
        .collection("active")
        .doc(req.body.todoId)
        .create({
          todoId: req.body.todoId,
          createdAt: req.body.createdAt,
          title: req.body.title,
          body: req.body.body,
        });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// update todo
app.put("/update/:todoId", (req, res) => {
  (async () => {
    try {
      const document = db
        .collection(req.body.userUid)
        .doc("todos")
        .collection("active")
        .doc(req.params.todoId);
      await document.update({
        title: req.body.title,
        body: req.body.body,
        updatedAt: req.body.updatedAt,
      });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// delete todo
app.delete("/delete/:userUid/:todoId", (req, res) => {
  (async () => {
    try {
      const document = db
        .collection(req.params.userUid)
        .doc("todos")
        .collection("active")
        .doc(req.params.todoId);
      await document.delete();
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}`));
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

// catch user uid
var userUid;
app.post("/catch-user-uid", (req, res) => {
  (() => {
    try {
      console.log(req.body.uid);
      userUid = req.body.uid;
      return res.status(200).json({ message: null });
    } catch (error) {
      console.log(error);
      console.log("Error fetching user data:", error);
      return res.status(200).json({ message: error.message });
    }
  })();
});

const pushDbChange = (socket) => {
  // TODO: think about the case admin accidentally deleted existing user todo data, but user account exists.
  const snapshotTodo = db.collection(userUid).doc("todos").collection("active");
  snapshotTodo.onSnapshot(
    (docSnapshot) => {
      const todoList = docSnapshot.docs.map((doc) => doc.data());
      socket.emit("newChangesInTodos", todoList);
      console.log(todoList);
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );

  const snapshotProfile = db.collection(userUid);
  snapshotProfile.onSnapshot(
    (docSnapshot) => {
      const profileList = docSnapshot.docs.map((doc) => doc.data());
      socket.emit("newChangesInProfile", profileList);
      console.log(profileList);
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );
};

io.on("connection", (socket) => {
  console.log("New client connected");
  pushDbChange(socket);
  socket.on("disconnect", () => {
    console.log("client disconected");
  });
});
