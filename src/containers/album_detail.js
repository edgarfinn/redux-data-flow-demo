import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlbumDetail extends Component {
  render() {
    if (!this.props.album) {
      return (
        <div>
          Click on an album title to view details
        </div>
      )
    }
    return (
      <div>
        <h3>Details for: {this.props.album.title}</h3>
        <p>By: {this.props.album.artist}</p>
        <p>Released: {this.props.album.released}</p>
      </div>
    )
  }
}

const mapStateToprops = (state) => {
  return {
    album: state.activeAlbum
  }
}
// mapStateToprops is always the first argument, so just one arg passed in will be interpretted as mapStateToprops
export default connect(mapStateToprops)(AlbumDetail)
