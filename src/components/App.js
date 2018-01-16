import React, { Component } from 'react';
import './App.css';
import AlbumList from '../containers/album_list';
import AlbumDetail from '../containers/album_detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hip Hop Albums</h1>
        </header>
        <AlbumList />
        <AlbumDetail />


      </div>
    );
  }
}

export default App;
