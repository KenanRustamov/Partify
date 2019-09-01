import React, { useState, useEffect } from "react";
import Navigation from './components/Navigation';
import "./App.css";
import InputForm from './components/InputForm';
import UsernameForm from './components/UsernameForm';
import './App.css';
import Button from 'react-bootstrap/Button';
import UserDisplay from "./components/UserDisplay";
import Login from "./components/Login";

function App() {
  //window.location.replace("https://accounts.spotify.com/authorize?client_id=acdd403ce33c48ea83e77b0f86a0d40f&redirect_uri=http://localhost:3000/callback/&scope=user-read-private%20user-read-email&response_type=token&state=123")
  const [playlistName, setPlaylistName] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState();

  const getUserData = async() => {
    let data = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
    data = await data.json();
    return data;
     // parses JSON response into native JavaScript objects
  }

  useEffect(() => {
    if (window.location.hash.includes("access_token")) {
      const unverifiedToken: any = window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/);
      const access_token: string = unverifiedToken !== null ? unverifiedToken[1] : "";
      setToken(access_token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getUserData().then(response => setCurrentUser(response));
    }
  }, [token]);

  const handleUserData = ({ playlistName, username }: any) => {
    setPlaylistName(playlistName);
    setUsername(username);
  }

  const userDataProvided = () => {
    return (playlistName !== '')
  }

  const createSubHeader = () => {
    if (!userDataProvided()) {
      return (
        <h2 className="title subtitle pt-3">
          Make Collaborative Spotify Playlists Easier Than Ever.
        </h2>)
    } else {
      return (
        <h2 className="title subtitle pt-3">
          Making playlist <span className="text-thicc">{playlistName}</span>
        </h2>)
    }
  }

  const createForm = () => {
    return userDataProvided() ? <UsernameForm token={token}/> : <InputForm handleUserData={handleUserData} />
  }

  return (
      (
        <div className="App">
          <Navigation />
          <div className="container">
            <h1 className="title pt-4 text-bg">Partify</h1>
            {createSubHeader()}
            <div className="center margin-top-md">
              {currentUser ? <UserDisplay user={currentUser}></UserDisplay> : <Login></Login>}
            </div>
          </div>
          {currentUser ? <div id="input" className="container">{createForm()}</div> : null}
        </div>
      ))
}

export default App;
