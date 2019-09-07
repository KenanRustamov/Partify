import React from "react";
import "./Load.css";

export default function Load() {
  return (
    <div className="center padding-top-md">
      <div className="title color-white">
        Hold Tight! Your Playlist is Being Created.
      </div>
      <div className="lds-roller padding-top-md">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
