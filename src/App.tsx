import React, { useState, useEffect } from "react";
import Navigation from './components/Navigation';
import "./App.css";
import InputForm from './components/InputForm';
import Footer from "./Footer";
import UsernameForm from './components/UsernameForm';
import './App.css';
import Button from 'react-bootstrap/Button';
import UserDisplay from "./components/UserDisplay";

function App() {
  //window.location.replace("https://accounts.spotify.com/authorize?client_id=acdd403ce33c48ea83e77b0f86a0d40f&redirect_uri=http://localhost:3000/callback/&scope=user-read-private%20user-read-email&response_type=token&state=123")
  const [playlistName, setPlaylistName] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const authEndPoint: string = "https://accounts.spotify.com/authorize?";
  const clientId: string = "acdd403ce33c48ea83e77b0f86a0d40f";
  const redirectUri: string = "http://localhost:3000/";
  const scopes: string[] = [
    "user-read-email"
  ]
  const displaySpotifyLogin: boolean = !window.location.hash.includes("access_token");

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
    const subHeaderText = (userDataProvided() ?
      `Making playlist ${playlistName} for ${username}` :
      'Make Collaborative Spotify Playlists Easier Than Ever.');
    return <h2 className="title subtitle pt-3">{subHeaderText}</h2>
  }

  const createForm = () => {
    return userDataProvided() ? <UsernameForm /> : <InputForm handleUserData={handleUserData} />
  }

  return (
    displaySpotifyLogin ? (
      <div >
        <h1 className="title padding-top-bg">Login to Your Spotify</h1>
        <div className="center buttonWrapper">
          {<a href={`${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`} type="submit" className="btn margin-top-sm spotifyButton">
            Submit
        </a>
          }
        </div>
      </div>) :
      (
        <div className="App">
          <Navigation />
          <div className="container">
            <h1 className="title pt-4 text-bg">Partify</h1>
            {createSubHeader()}
            <div className="center margin-top-md">
              {currentUser ? <UserDisplay user={currentUser}></UserDisplay> : null}
            </div>
          </div>
          <div id="input" className="container">
            {createForm()}
          </div>
          <Footer></Footer>
        </div>
      ))
}

export default App;
