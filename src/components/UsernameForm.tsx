import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UsernameForm.css';
import defaultImage from '../img/default-user-profile.png';
import Load from './Load';
import Image from 'react-bootstrap/Image'

const UserNameForm = ({token, currentUser, spotifyAPIWrapper, playlistName} : any) => {

  const [friendList, setFriendList] = useState<string[]>([]);
  const [friend, setFriend] = useState<string>('');
  const [friendData, setFriendData] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [creatingPlaylist, setCreatingPlaylist] = useState<boolean>(false);
  const [playlistMade, setPlaylistMade] = useState<boolean>(false);
  const [playlistData, setPlaylistData] = useState<any>();
  const [mood, setMood] = useState<string>('Party');

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    if (!friend) {
      setError('Please fill out input field');
      return;
    }
    const data = await getUserData(friend);
    if (isUserValid(data)) {
      setFriendList(friendList.concat(friend));
      setFriendData([...friendData, data]);
      setFriend('');
    }
  }

  const getUserData = async(user_id : any) => {
    let data = await fetch(`https://api.spotify.com/v1/users/${user_id}`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
    data = await data.json();
    return data;
  }

  const isUserValid = (userData : any) => {
    if ('error' in userData) {
      setError(userData.error.message);
      return false;
    }
    const {id} = userData;
    if (friendList.includes(id) || currentUser === id) {
      setError('Friend already added to playlist');
      return false;
    }
    setError('');
    return true;
  }

  const friendsDisplay = () => {
    const display: any[] = [];
    for (const user of friendData) {

      let img = !user.images.length ? defaultImage : user.images[0].url;

      display.push(
        <div className="col-12 col-md-4 col-lg-3 center margin-top-sm" key={user.id}>
          <img src={img} className="profile-sm"></img>
          <h1 className="title text-sm margin-top-xs color-black">{user.display_name}</h1>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="row">
          {display}
        </div>
      </div>
    )
  }

  const getFormError = () => {
    return (error ? 
    (<Form.Text className="text-muted form-error">
      {error}
    </Form.Text>) : 
    (<Form.Text className="text-muted form-error">
      {  }
    </Form.Text>)
    )
  }

  const createPlaylist = async(e: any) => {
    e.preventDefault();
    setCreatingPlaylist(true);
    for (const username of friendList) {
      await spotifyAPIWrapper.addUserSongs(username);
    }
    await spotifyAPIWrapper.addUserSongs(currentUser);
    setPlaylistData(await spotifyAPIWrapper.createPlaylist(currentUser, playlistName, mood));
    setPlaylistMade(true);
  }

  const showPlaylist = () => {
    let playlist_link = playlistData.external_urls.spotify;
    let playlist_image = playlistData.images[1] ? playlistData.images[1].url : null;
    let playlist_name = playlistData.name;

    return (
      <div className="playlist">
        <div className="mt-5 playlistImage"><Image src={playlist_image} rounded onClick = {() => {window.location.href = playlist_link}} alt="Playlist Image"></Image></div>
        <a href={playlist_link} className="color-main main-hover text-thicc playlistText">{playlist_name}</a>
      </div>
    );
  }

  const setMode = (selectedMood: any) => {
    setMood(selectedMood);
  }

  const makeAnother = (e: any) => {
    window.location.reload();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          {!creatingPlaylist ? 
            <Form.Group className="padding-top-md color-black col-md-8">
              <Form.Label className="font-weight-lt color-black">Enter Your Friends</Form.Label>
              <Form.Control type="text" placeholder="Friend's Spotify Username" onChange={(e:any) => setFriend(e.target.value)} value={friend} />
              {getFormError()}
              <Form.Label className="font-weight-lt color-black pt-4">Select Your Playlist Type</Form.Label>
              <Form.Control as="select" onChange={(e:any) => setMode(e.target.value)}>
                  <option>Party</option>
                  <option>Chill</option>
                  <option>Discover</option>
                </Form.Control>
              <div className="row center">
                <div className="col-md-6">
                  <Button type="submit" className="btn btn-primary btn-block margin-top-md">
                    Add Another
                  </Button>
                </div>
                <div className="col-md-6">
                  <Button className="btn btn-success btn-block margin-top-md" onClick={(e: any) => createPlaylist(e)}>
                    Create Playlist
                  </Button>
                </div>
              </div>
              {friendsDisplay()}
            </Form.Group>
          : !playlistMade ? <Load></Load> : <div>
            <div className="title color-black">
              {showPlaylist()}
              <Button className="btn btn-primary btn-block margin-top-md" onClick={(e: any) => makeAnother(e)}>
                Create Another
              </Button>
            </div>
            
          </div>}
        </div>
      </Form>
    </div>
  );
}

export default UserNameForm;