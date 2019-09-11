import React from "react";

export default function Login() {

  const authEndPoint: string = "https://accounts.spotify.com/authorize?";
  const clientId: string = "acdd403ce33c48ea83e77b0f86a0d40f";
  const redirectUri: string = "http://kenanrustamov.io.github/Partify";
  const scopes: string[] = [
    "user-read-email, playlist-modify-public"
  ]

  return (
    <div>
      <div className="center buttonWrapper">
        {
          <a
            href={`${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token`}
            type="submit"
            className="btn margin-top-sm spotifyButton"
          >
            Spotify Login
          </a>
        }
      </div>
    </div>
  );
}
