import React from 'react';
import './Tracklist.css'

import Track from '../Track/Track.js';

// Temporary track variable
const tracks = [
  {title: `First`, artist: `Lauren Daigle`, album: `How Can It Be`},
  {title: `Song 2`, artist: `Blur`, album: `Blur`},
  {title: `Third Wheel Song`, artist: `Studio C`, album: ``}
];

class Tracklist extends React.Component {
  render() {
    return (
      <div className="Tracklist">
          {
            tracks.map(track => <Track track={track} />)
          }
      </div>
    );
  }
}

export default Tracklist;
