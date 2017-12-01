import React from 'react';
import './Tracklist.css'

import Track from '../Track/Track.js';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="Tracklist">
          {
            this.props.tracks.map(track => <Track track={track} />)
          }
      </div>
    );
  }
}

export default Tracklist;
