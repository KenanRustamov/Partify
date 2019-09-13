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
  const [playlistName, setPlaylistName] = useState("");
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
          <h2 className={userSignedIn ? "title subtitle pt-3 color-black sub-header" : "title subtitle pt-3 color-black sub-header"}>
            Put the power of the party in the palm of your hand.
          </h2>
        </div>)
      );
    } else {
      return (
        null
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
        {!userSignedIn ? <h1 className="title text-bg text-thicc">Partify</h1> : null}
        <div className={userSignedIn ? "form-container" : ""}>
        {createSubHeader()}
        <div className="center margin-top-md">
          {currentUser && userSignedIn ? (
            <UserDisplay user={currentUser} playlistName={playlistName}></UserDisplay>
          ) : (
            <Login></Login>
          )}
        </div>
        {currentUser && userSignedIn ? (
        <div id="input" className="container">
          {createForm()}
        </div>
      ) : null}
      </div>
        </div>
      </div>
    )
  }
  const userSignedIn = window.location.href.includes("access_token");

  return (
    <Router>
      <head>
        <link rel="shortcut icon" href="http://sstatic.net/stackoverflow/img/favicon.ico"/>
      </head>
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
