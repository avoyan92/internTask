import React from "react";
import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";

const Home = ({ profile, setProfile }) => {
  return (
    <div>
      {profile ? (
        <LogOut profile={profile} setProfile={setProfile} />
      ) : (
        <LogIn setProfile={setProfile} />
      )}
    </div>
  );
};

export default Home;
