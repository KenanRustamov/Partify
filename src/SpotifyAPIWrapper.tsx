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

  async getRecommendations(seedSongs: string[], mood: string) {
    const song_query = seedSongs.join(',');

    let query = '&market=US&limit=40';
    if (mood === 'Party') {
      query += '&min_popularity=70&min_danceability=0.6'
    } else if (mood === 'Chill') {
      query += '&max_energy=0.5'
    } else {
      query += '&max_popularity=35'
    }

    let data = await fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${song_query}${query}`, {
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

  shuffle(array : any) {
    array.sort(() => Math.random() - 0.5);
  }

  async addUserSongs(user_id : string) {
    const sample_size = 5;

    return (this.getUserPlaylists(user_id).then(async(playlist_data : any) => {
      let user_tracks : string[] = []
      const playlists = playlist_data.items;
      for (const playlist of playlists) {
        await this.getPlaylistTracks(playlist.id).then((track_data : any) => {
          for (const track of track_data.items) {
            if (track.track !== null) {
              user_tracks.push(track.track.id);
            }
          }
        });
      }
      this.shuffle(user_tracks);
      this.songs = this.songs.concat(user_tracks.slice(0, sample_size));
      return user_tracks.slice(0, sample_size);
    }));
  }

  async createPlaylist(user_id : string, playlist_name: string, mood: string, playlist_size: number = 40) {


    var i: number = 0;
    for(i ; i < this.songs.length ; i = i + 5 ) {
      if (i + 5 <= this.songs.length) {
        const song_recommendations: any = await this.getRecommendations(this.songs.slice(i, i + 5), mood);
        for (const recommended_track of song_recommendations.tracks) {
          this.recommendations.push(recommended_track.uri);
        }
      }
    }
    this.shuffle(this.recommendations);
    this.recommendations = this.recommendations.slice(0, playlist_size);

    let playlist_data: any = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      },
      body: JSON.stringify({name: `${playlist_name} by Partify`})
    });
    playlist_data = await playlist_data.json();
    let playlist_id = playlist_data.id;

    await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      },
      body: JSON.stringify({uris: this.recommendations})
    });

    let playlist_details: any = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      }
    });
    playlist_details = await playlist_details.json();
    return playlist_details

  }
}