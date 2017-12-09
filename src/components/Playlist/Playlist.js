import React from 'react';
import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist.js';

export class Playlist extends React.Component
{
  constructor(props)
  {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e)
  {
    this.props.onNameChange(e.target.value);
  }

  render()
  {
    return (
      <div className="Playlist">
        <input input={this.props.playlistName} onChange={this.handleNameChange} />
        <Tracklist
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
        />
        <a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
