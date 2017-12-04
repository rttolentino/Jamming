import Config from '../.config.js';

const clientID = Config.clientID;
const redirectURI = Config.redirectURI;

let accessToken, expiresIn;

const Spotify = {

  getAccessToken()
  {
    if(accessToken)
      return accessToken;
    else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/))
    {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];

      window.setTimeout(() => accessToken = '', expiresIn*1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    }
    else
    {
      let url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = url;
    }
  },

  search(term)
  {
    const searchURL = `https://api.spotify.com/v1/search?type=track&q=${term}&limit=12`;
    return fetch(searchURL, {headers: {Authorization: `Bearer ${accessToken}`}})
      .then(response => response.json())
        .then(jsonResponse =>
          {
            if(jsonResponse.tracks)
            {
              console.log(jsonResponse);
              console.log(jsonResponse.tracks.items[0]);
              return jsonResponse.tracks.items.map(track =>
                {
                  return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                  };
                }
              );
            }
            else
              return [];
          }
        );
  }
};

export default Spotify;
