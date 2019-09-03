import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormLabel } from 'react-bootstrap';

const InputForm = ({handleUserData}:any) => {

  const [playlistName, setPlaylistName] = useState('');
  const [username, setUsername] = useState('');
  const [displayPlayListForm, setDisplayPlaylistForm] = useState(true);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleUserData({playlistName, username})
    setPlaylistName('');
    setUsername('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <Form.Group className="padding-top-bg color-black col-md-8">
          <FormLabel>Enter Playlist Name:</FormLabel>
          <Form.Control type="text" placeholder="Playlist Name" value={playlistName} onChange={(e:any) => setPlaylistName(e.target.value)} required/>
        </Form.Group>
      </div>
      <div className="row justify-content-center">
        <Form.Group className="color-black col-md-8 text-md">
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