import React from "react";
import { GoogleLogout } from "react-google-login";
import PostList from "./PostList";
import '../css/logout.css'

const LogOut = ({ setProfile }) => {
  const clientId ="1059879948833-fn0oq9ei2l2ror0c9rm1d2b43tgg0eh8.apps.googleusercontent.com";

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
