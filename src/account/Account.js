import Profile from "./Profile";
import DeleteAccount from "./DeleteAccount";

export default function Account() {
  return (
    <div>
      <Profile />
      <div style={{ marginTop: "20px" }}>
        <DeleteAccount />
      </div>
    </div>
  );
}
