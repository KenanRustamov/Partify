import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InputForm = ({handleUserData}:any) => {

  const [playlistName, setPlaylistName] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleUserData({playlistName, username})
    setPlaylistName('');
    setUsername('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <Form.Group className="padding-top-bg color-white col-md-8">
          <Form.Control type="text" placeholder="Playlist Name" value={playlistName} onChange={(e:any) => setPlaylistName(e.target.value)} required/>
        </Form.Group>
      </div>

      <div className="row justify-content-center">
        <Form.Group className="pt-5 color-white col-md-8 text-md">
          <Form.Label className="font-weight-lt">Enter Your Username</Form.Label>
          <Form.Control type="text" placeholder="Username" value={username} onChange={(e:any) => setUsername(e.target.value)} required/>
            <div className="center">
              <Button type="submit" className="btn btn-primary btn-block margin-top-sm">
                Submit
              </Button>
            </div>
        </Form.Group>
      </div>
    </Form>
  );
}

export default InputForm;