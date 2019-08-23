import React, { useState } from "react";
import Navigation from './components/Navigation';
import "./App.css";
import InputForm from './components/InputForm';
import Footer from "./Footer";
import UsernameForm from './components/UsernameForm';
import './App.css';


function App() {

  const [playlistName, setPlaylistName] = useState('');
  const [username, setUsername] = useState('');

  const handleUserData = ({playlistName, username}: any) => {
    setPlaylistName(playlistName);
    setUsername(username);
  }

  const userDataProvided = () => {
    return (playlistName !== '' && username !== '')
  }

  const createSubHeader = () => {
    const subHeaderText =  (userDataProvided() ?
      `Making playlist ${playlistName} for ${username}` :
      'Make Collaborative Spotify Playlists Easier Than Ever.');
    return <h2 className="title subtitle pt-3">{subHeaderText}</h2>
  }

  const createForm = () => {
    return userDataProvided() ? <UsernameForm/> : <InputForm handleUserData={handleUserData}/>
  }


  return (
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
      )
}

export default App;
