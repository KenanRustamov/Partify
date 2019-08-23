import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserNameForm = () => {

  const [friendList, setFriendList] = useState<string[]>([]);
  const [friend, setFriend] = useState<string>('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setFriendList(friendList.concat(friend));
    setFriend('');
  }

  return (
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
    </Form>
  );
}

export default UserNameForm;