export default function ProfilePresentation({ editMode, displayName, email }) {
  if (!editMode) {
    return (
      <div>
        <div>Name: {displayName}</div>
        <div>Email: {email}</div>
      </div>
    );
  } else return null;
}
