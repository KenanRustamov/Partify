import React from "react";
import loginInfo from './LoginInfo';

export default function Login() {

  // Component that runs after user attempts to login
  // Goes to specified callback

  const authEndPoint: string = "https://accounts.spotify.com/authorize?";
  const clientId: string = loginInfo;
  const redirectUri: string = "https://partify-us.com/";
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
