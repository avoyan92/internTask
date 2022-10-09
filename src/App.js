import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Comment from "./components/CommentPage";
import "../src/App.css";
import Home from "./components/Home";

export const clientId =
"535181746511-9tshfvqbh5b5pu7ubrblmcl1j7c9uc4u.apps.googleusercontent.com";

function App() {

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
          element={<Home profile={profile} setProfile={setProfile} />}
        />
        <Route path="/commentpage/:id" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
