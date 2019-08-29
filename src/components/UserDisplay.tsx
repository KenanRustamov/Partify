import React from 'react';
import './UserDisplay.css';

const UserDisplay = ({user} : any) => {
  console.log(user);
  return (
    <div className="display-wrapper">
      <img src={user.images[0].url} className="profile"></img>
      <div className="margin-left-sm">
        <h1 className="title text-lg">Making playlist for:</h1>
        <h1 className="title text-thicc">{user.display_name}</h1>
      </div>
    </div>
  )
}

export default UserDisplay;