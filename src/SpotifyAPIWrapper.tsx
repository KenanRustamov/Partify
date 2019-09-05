
export default class SpotifyAPIWrapper {
  public token: string;
  public songs : string[];
  public recommendations : any [];

  constructor(token : string) {
    this.token = token;
    this.songs = [];
    this.recommendations = [];
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

  getSongs() {
    return this.songs;
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

  async getRecommendations(seedSongs: string[]) {
    const song_query = seedSongs.join(',');
    console.log(song_query);

    let data = await fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${song_query}&market=US`, {
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

  async addUserSongs(user_id : string, sample_size : number = 5) {
    console.log(user_id)
    sample_size = sample_size > 5 || sample_size < 5 ? 5 : sample_size;
    function shuffle(array : any) {
      array.sort(() => Math.random() - 0.5);
    }

    return (this.getUserPlaylists(user_id).then(async(playlist_data : any) => {
      let user_tracks : string[] = []
      const playlists = playlist_data.items;
      for (const playlist of playlists) {
        await this.getPlaylistTracks(playlist.id).then((track_data : any) => {
          for (const track of track_data.items) {
            user_tracks.push(track.track.id);
          }
        });
      }
      shuffle(user_tracks);
      this.songs = this.songs.concat(user_tracks.slice(0, sample_size));
      return user_tracks.slice(0, sample_size);
    }));
  }

  async createPlaylist(user_id : string, playlist_name: string) {
    var i: number = 0;
    for(i ; i < this.songs.length ; i = i + 5 ) {
      if (i + 5 <= this.songs.length) {
        await this.recommendations.push(await this.getRecommendations(this.songs.slice(i, i + 5)));
      }
    }
    if(i !== this.songs.length) {
      await this.recommendations.push(await this.getRecommendations(this.songs.slice(i, this.songs.length)));
    }
    this.recommendations = this.recommendations.flat();
    console.log(this.recommendations.flat());
  }
}