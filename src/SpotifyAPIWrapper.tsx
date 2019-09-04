
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

    return (this.getUserPlaylists(user_id).then(async(playlist_data : any) => {
      let user_tracks : string[] = []
      const playlists = playlist_data.items;
      for (const playlist of playlists) {
        await this.getPlaylistTracks(playlist.id).then((track_data : any) => {
          for (const track of track_data.items) {
            user_tracks.push(track.track.uri);
          }
        });
      }
      console.log(user_tracks);
      if (user_tracks) {
        shuffle(user_tracks);
        return user_tracks.slice(0, sample_size);
      }
    }));

    // return new Promise((resolve, reject) => {
    //   let user_tracks : string[] = [];
    //   let promiseArray : Promise<any>[] = [];
    //   this.getUserPlaylists(user_id).then((res : any) => {

    //     for (const playlist of res.items) {
    //       promiseArray.push(this.getPlaylistTracks(playlist.id));
    //     }
    //     Promise.all(promiseArray).then((res: any) => {
    //       console.log(res);
    //       user_tracks = res.map((item : any) => {
    //         return item.items.map((track:any) => {
    //           return track.track.uri;
    //         });
    //       })
    //       user_tracks = user_tracks.flat(1);
    //       shuffle(user_tracks);
    //       console.log(user_tracks);
    //       this.userTracks = user_tracks;
          
    //     })
    //     console.log(this.userTracks);
    //     return user_tracks;
    //   });
    //   resolve(user_tracks);
    // }).then(res => {
    //   return res;
    // });
  }
}