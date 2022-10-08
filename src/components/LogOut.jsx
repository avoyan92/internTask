import React from "react";
import { GoogleLogout } from "react-google-login";
import PostList from "./PostList";
import '../css/logout.css'

const LogOut = ({ setProfile }) => {
  const clientId ="535181746511-9tshfvqbh5b5pu7ubrblmcl1j7c9uc4u.apps.googleusercontent.com";

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
        <PostList/>
      
    </div>
  );
};

export default LogOut;
