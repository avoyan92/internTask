import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import Comment from "./components/CommentPage";
import '../src/App.css'

function App() {
  const clientId = "535181746511-9tshfvqbh5b5pu7ubrblmcl1j7c9uc4u.apps.googleusercontent.com"
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            profile ? (
              <LogOut profile={profile} setProfile={setProfile} />
            ) : (
              <LogIn setProfile={setProfile} />
            )
          }
        />
        <Route path="/commentpage/:id" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
