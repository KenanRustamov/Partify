import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import InputForm from "./components/InputForm";
import UsernameForm from "./components/UsernameForm";
import "./App.css";
import UserDisplay from "./components/UserDisplay";
import Login from "./components/Login";
import SpotifyAPIWrapper from './SpotifyAPIWrapper';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./About"

function App() {
  //window.location.replace("https://accounts.spotify.com/authorize?client_id=acdd403ce33c48ea83e77b0f86a0d40f&redirect_uri=http://localhost:3000/callback/&scope=user-read-private%20user-read-email&response_type=token&state=123")
  const [playlistName, setPlaylistName] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [spotifyAPIWrapper, setSpotifyAPIWrapper] = useState();

  const getUserData = async () => {
    let data = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    data = await data.json();
    return data;
  };

  useEffect(() => {
    if (window.location.hash.includes("access_token")) {
      const unverifiedToken: any = window.location.href.match(
        /\#(?:access_token)\=([\S\s]*?)\&/
      );
      const access_token: string =
        unverifiedToken !== null ? unverifiedToken[1] : "";
      setToken(access_token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      setSpotifyAPIWrapper(new SpotifyAPIWrapper(token));
      getUserData().then(response => setCurrentUser(response));
    }
  }, [token]);

  const handleUserData = ({ playlistName }: any) => {
    setPlaylistName(playlistName);
  };

  const userDataProvided = () => {
    return playlistName !== "";
  };

  const createSubHeader = () => {
    if (!userDataProvided()) {
      return (
        userSignedIn ? null : (<div>
          <h2 className={userSignedIn ? "title subtitle pt-3 color-white" : "title subtitle pt-3 color-black"}>
            Make A Spotify Playlists For Your Party
          </h2>
          <h2 className={userSignedIn ? "title subtitle pt-3 color-white" : "title subtitle pt-3 color-black"}>Easier Than Ever.</h2>
        </div>)
      );
    } else {
      return (
        <h2 className="title subtitle pt-3 color-white">
          Making playlist <span className="text-thicc">{playlistName}</span>
        </h2>
      );
    }
  };

  const createForm = () => {
    return userDataProvided() ? (
      <UsernameForm token={token} currentUser={currentUser.id} spotifyAPIWrapper={spotifyAPIWrapper} playlistName = {playlistName}/>
    ) : (
      <InputForm handleUserData={handleUserData} />
    );
  };
  
  const Home = () => {
    return (
    <div className={userSignedIn ? "top-padding" : "main-img"}>
      <div className="container">
        <h1 className={userSignedIn ? "title pt-4 text-bg color-white" : "title pt-4 text-bg color-black"}>Partify</h1>
        {createSubHeader()}
        <div className="center margin-top-md">
          {currentUser && userSignedIn ? (
            <UserDisplay user={currentUser}></UserDisplay>
          ) : (
            <Login></Login>
          )}
        </div>
      </div>
      {currentUser && userSignedIn ? (
        <div id="input" className="container">
          {createForm()}
        </div>
      ) : null}
      </div>
    )
  }
  const userSignedIn = window.location.href.includes("access_token");

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/about" exact component = {About}/>
        </Switch>
        {currentUser && userSignedIn ? 
          <Navigation /> : 
          null}
      </div>
    </Router>
  );
}

export default App;
