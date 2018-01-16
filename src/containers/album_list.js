import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import { selectAlbum } from '../actions/index';

class AlbumList extends Component {
// render the title of all albums in this.props.albumz
// with an onClick handler that triggers the selectAlbum action creator,
// passing in the 'props.albumz' album object being clicked as an argument
  renderList() {
    return this.props.albumz.map(album => {
      return (
        <li
          key={album.title}
          onClick={() => { this.props.selectAlbum(album)} }>
          <h4>{album.title}</h4>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {/* render the list of albums */}
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

// used to pass state to connect, which maps redux state to containers props
const mapStateToprops = (state) => {
  return {
    albumz: state.albums
  }
}

// 'dispatch' = your actions being distributed through reducers
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectAlbum: selectAlbum}, dispatch)
}

export default connect(mapStateToprops,mapDispatchToProps)(AlbumList)
