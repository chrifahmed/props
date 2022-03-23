const Profile = ({ fullName, children, handelName, bio }) => {
  // const Profile = (props) => {
  return (
    <>
      <div style={{ color: "gray" }}>
        <h2 onClick={() => handelName(fullName)}>{fullName}</h2>
        <div>{children}</div>
        <h3>{bio}</h3>
      </div>
    </>
  );
};

export default Profile;
