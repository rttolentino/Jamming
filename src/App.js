import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Playlist from './components/Playlist/Playlist.js';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      searchResults: [

        {
          name: `Song 2`,
          artist: `Blur`,
          album: `Self-titled`,
          uri: `testURI`
        }

      ],
      playlistName: ``,
      playlistTracks: []
    };

    this.addTrack           = this.addTrack.bind(this);
    this.removeTrack        = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist       = this.savePlaylist.bind(this);
  }

  addTrack(track)
  {
    if(!this.state.playlistTracks.find(t => t.name === track.name))
    {
      let tempList = this.state.playlistTracks.slice();
      tempList.push(track);
      this.setState({ playlistTracks: tempList });
    }
  }

  removeTrack(track)
  {
    let index = this.state.playlistTracks.indexOf(track);

    if(index >= 0)
    {
      let tempList = this.state.playlistTracks.slice();
      tempList.splice(index,1);
      this.setState({ playlistTracks: tempList });
    }
    else
      console.log(`Error finding track ${track.name} in playlist.`);
  }

  updatePlaylistName(name)
  {
    this.setState({ playlistName: name });
  }

  savePlaylist()
  {
    const list = this.state.playlistTracks.map(track => track.uri);
  }

  render()
  {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              isRemoval={false}
            />
            <Playlist
              playlistName={this.state.playlistName}
              onNameChange={this.updatePlaylistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
              isRemoval={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
