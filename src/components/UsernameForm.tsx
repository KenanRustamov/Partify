import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UsernameForm.css';
import defaultImage from '../img/default-user-profile.png';

const UserNameForm = ({token, currentUser, spotifyAPIWrapper, playlistName} : any) => {

  const [friendList, setFriendList] = useState<string[]>([]);
  const [friend, setFriend] = useState<string>('');
  const [friendData, setFriendData] = useState<any>([]);
  const [error, setError] = useState<string>('');

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
    const display = [];
    for (const user of friendData) {

      let img = !user.images.length ? defaultImage : user.images[0].url;

      display.push(
        <div className="col-6 col-md-4 col-lg-3 center margin-top-sm" key={user.id}>
          <img src={img} className="profile-sm"></img>
          <h1 className="title text-sm margin-top-xs">{user.display_name}</h1>
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

  const getFormLabel = () => {
    return (error ? 
      <Form.Label className="font-weight-lt">{error}</Form.Label> :
      <Form.Label className="font-weight-lt">Enter Your Friends</Form.Label>
    );
  }

  const createPlaylist = async(e: any) => {
    e.preventDefault();
    for (const username of friendList) {
      await spotifyAPIWrapper.addUserSongs(username, 5);
    }
    await spotifyAPIWrapper.addUserSongs(currentUser, 5)

    spotifyAPIWrapper.createPlaylist(currentUser, playlistName);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <Form.Group className="padding-top-md color-black col-md-8">
            {getFormLabel()}
            <Form.Control type="text" placeholder="Friend's Spotify Username" onChange={(e:any) => setFriend(e.target.value)} value={friend} />
            <div className="row center">
              <div className="col-md-6">
                <Button type="submit" className="btn btn-primary btn-block margin-top-sm">
                  Add Another
                </Button>
              </div>
              <div className="col-md-6">
                <Button className="btn btn-success btn-block margin-top-sm" onClick={(e: any) => createPlaylist(e)}>
                  Create Playlist
                </Button>
              </div>
            </div>
            {friendsDisplay()}
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default UserNameForm;