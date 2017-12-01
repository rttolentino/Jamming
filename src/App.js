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
/*
        {
          name: `Song 2`,
          artist: `Blur`,
          album: `Self-titled`
        }
*/
      ],
      playlistName: ``,
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track)
  {
    if(!this.state.playlistTracks.find(t => t.name == track.name))
    {
      let tempList = this.state.playlistTracks.slice();
      tempList.push(track);
      this.setState({playlistTracks: tempList});
    }
  }

  render()
  {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
