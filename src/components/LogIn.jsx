import React from "react";
import GoogleLogin from "react-google-login";
import { clientId } from "../App";
import "../css/login.css";


export const LogIn = ({ setProfile }) => {


  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  
  return (
    <div className="login">
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default LogIn;
