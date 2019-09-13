import React from "react";
import "./Load.css";

export default function Load() {
  // Loader component for when the playlist is being created
  return (
    <div className="center padding-top-md">
      <div className="title">
        Hold tight! Your playlist is being created.
      </div>
      <div className="lds-roller padding-top-md color-main">
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
