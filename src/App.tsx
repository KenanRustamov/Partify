import React, { useState, useEffect } from "react";
import Navigation from './components/Navigation';
import "./App.css";
import InputForm from './components/InputForm';
import Footer from "./Footer";
import UsernameForm from './components/UsernameForm';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  //window.location.replace("https://accounts.spotify.com/authorize?client_id=acdd403ce33c48ea83e77b0f86a0d40f&redirect_uri=http://localhost:3000/callback/&scope=user-read-private%20user-read-email&response_type=token&state=123")
  const [displaySpotifyLogin, setDisplaySpotifyLogin] = useState(true);
  const [playlistName, setPlaylistName] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState("");
  const authEndPoint: string = "https://accounts.spotify.com/authorize?";
  const clientId: string = "acdd403ce33c48ea83e77b0f86a0d40f";
  const redirectUri: string = "http://localhost:3000/";
  const scopes: string[] = [
    "user-read-email"
  ]

  function getParameterByName(name : any) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.href);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  useEffect(() => {
    if (window.location.hash.includes("access_token")) {
      setDisplaySpotifyLogin(false);
      const unverifiedToken: any = window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/);
      const access_token: string = unverifiedToken !== null ? unverifiedToken[1] : "";
    }
  }, [])

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
        <h1 className="title padding-top-bg">Spotify Profile</h1>
        <div className="center buttonWrapper">
          {<a href={`${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`} type="submit" className="btn margin-top-sm spotifyButton" onClick={() => { setDisplaySpotifyLogin(false) }}>
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
          </div>
          <div id="input" className="container">
            {createForm()}
          </div>
          <Footer></Footer>
        </div>
      ))
}

export default App;
