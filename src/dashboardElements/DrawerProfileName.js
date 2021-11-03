import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

export default function DrawerProfileName({ displayName }) {
  const Name = () => {
    var userName;
    if (displayName === null) {
      userName = (
        <Skeleton
          variant="text"
          height={20}
          width="70%"
          style={{
            textAlign: "center",
            margin: "-2px auto 0px auto",
          }}
        />
      );
    } else {
      userName = <div>{displayName}</div>;
    }
    return userName;
  };

  return (
    <ListItem style={{ padding: "10px 20px", textAlign: "center" }}>
      <ListItemText primary={<Name />} />
    </ListItem>
  );
}
