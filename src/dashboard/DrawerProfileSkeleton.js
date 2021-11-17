import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

export default function DrawerProfileSkeleton() {
  return (
    <div>
      <ListItem
        style={{
          padding: "30px 0px 0px 0px",
          display: "inline-flex",
          justifyContent: "center",
        }}
      >
        <Skeleton variant="circular" width={100} height={100} />
      </ListItem>
      <ListItem style={{ padding: "10px 20px", textAlign: "center" }}>
        <ListItemText
          primary={
            <Skeleton
              variant="text"
              height={20}
              width="70%"
              style={{
                textAlign: "center",
                margin: "-2px auto 0px auto",
              }}
            />
          }
        />
      </ListItem>
    </div>
  );
}
