import React from "react";
import { GoogleLogout } from "react-google-login";
import PostList from "./PostList";
import { clientId } from "../App";
import "../css/logout.css";

const LogOut = ({ setProfile }) => {
 

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div className="logout">
      <div className="end">
        <GoogleLogout
          className="out"
          clientId={clientId}
          buttonText="Log out"
          onLogoutSuccess={logOut}
        />
      </div>
      <PostList />
    </div>
  );
};

export default LogOut;
