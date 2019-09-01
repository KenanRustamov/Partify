import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UsernameForm.css';

const UserNameForm = ({token} : any) => {

  const [friendList, setFriendList] = useState<string[]>([]);
  const [friend, setFriend] = useState<string>('');
  const [friendData, setFriendData] = useState<any>([]);

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    setFriendList(friendList.concat(friend));
    setFriend('');

    const data = await getUserData(friend);
    setFriendData([...friendData, data])
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

  const friendsDisplay = () => {
    const display = [];
    for (const user of friendData) {
      display.push(
        <div className="col-6 col-md-3 col-lg-2 center margin-top-sm">
          <img src={user.images[0].url} className="profile-sm"></img>
          <h1 className="title text-sm">{user.display_name}</h1>
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

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <Form.Group className="padding-top-md color-white col-md-8">
            <Form.Label className="font-weight-lt">Enter Your Friends</Form.Label>
            <Form.Control type="text" placeholder="Friend's Spotify Username" onChange={(e:any) => setFriend(e.target.value)} value={friend} required />

            <div className="row center">
              <div className="col-md-6">
                <Button type="submit" className="btn btn-primary btn-block margin-top-sm">
                  Add Another
                </Button>
              </div>
              <div className="col-md-6">
                <Button type="submit" className="btn btn-success btn-block margin-top-sm">
                  Create Playlist
                </Button>
              </div>
            </div>
          </Form.Group>
        </div>
      {friendsDisplay()}
      </Form>
    </div>
  );
}

export default UserNameForm;