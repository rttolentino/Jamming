import Config from `../../.config`;

const clientID = Config.clientID;
const redirectURI = Config.redirectURI;

let accessToken, expiresIn;

const Spotify = {
  getAccessToken()
  {
    // Return the currect accessToken if we have it
    if(accessToken)
      return accessToken;
    else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/))
    {
      // Otherwise, check for it in the URL ^see above^
      // Copy it down if it exists
      accessToken = window.location.href.match(/access_token=([^&]*)/)[0];
      console.log(accessToken);
      expiresIn = window.location.href.match(/expires_in=([^&]*)/)[0];
      console.log(expiresIn);

      // Clear parameters from URL so we don't grab expired data later
      window.setTimeout(() => accessToken = '', expiresIn*1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    }
    else
    {
      // If the first 2 conditions failed, then send authentication request
      let url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = url;
    }
  }
};

export default Spotify;
