import React from 'react';
import './UserDisplay.css';
import defaultImage from '../img/default-user-profile.png';

const UserDisplay = ({user, playlistName} : any) => {

  let img = !user.images.length ? defaultImage : user.images[0].url;
  return (
    <div className="display-wrapper">
      <img src={img} className="profile"></img>
      <div className="margin-left-sm">
        <h1 className="title text-lg color-black">Making playlist <span className="title text-thicc color-main">{playlistName}</span> for:</h1>
        <h1 className="title text-thicc color-main">{user.display_name}</h1>
      </div>
    </div>
  )
}

export default UserDisplay;