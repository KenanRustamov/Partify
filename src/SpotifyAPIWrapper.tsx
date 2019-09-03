
export default class SpotifyAPIWrapper {
  public token: string;

  constructor(token : string) {
    this.token = token;
  }

  async getUserPlaylists(user_id : string) {
    let data = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      }
    });
    data = await data.json();
    return data;
  }

  async getPlaylistTracks(playlist_id : string) {
    let data = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      }
    });
    data = await data.json();
    return data;
  }

  async getRandomSample(user_id : string, sample_size : number) {

    function shuffle(array : any) {
      array.sort(() => Math.random() - 0.5);
    }

    return new Promise((resolve, reject) => {
      let user_tracks : string[] = [];
      this.getUserPlaylists(user_id).then((res : any) => {
        for (const playlist of res.items) {
          this.getPlaylistTracks(playlist.id).then((tracks : any) => {
            for (const track_data of tracks.items) {
              let track_uri : string = track_data.track.uri;
              user_tracks.push(track_uri);
            }
          });
        }
        console.log(user_tracks);
        resolve(user_tracks);
      });
    });
  }
}