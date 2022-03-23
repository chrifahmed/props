import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/ProfileCom";

function App() {
  let fullName = "Cherif Ahmed";
  let bio = "work under pressure";
  let profession = "web dev";

  const handelName = (x) => {
    alert(x);
  };

  return (
    <>
      <Profile fullName={fullName} handelName={handelName} bio={bio}>
        <img
          className="Profp"
          style={{ borderRadius: "50%", width: "400px" }}
          src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          alt="profile"
        />
      </Profile>
    </>
  );
}

export default App;
