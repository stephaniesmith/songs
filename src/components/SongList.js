import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


export class SongList extends Component {
  static propTypes = {
    songs: PropTypes.array,
  };

  render() {
    const { songs, selectSong } = this.props;
    return (
      <div className="ui divided list">
        {songs.map((song) => {
          const { title } = song;

          return (
            <div className="item" key={title}>
              <div className="right floated content">
                <button
                  onClick={() => selectSong(song)}
                  className="ui button primary">
                  Select
                </button>
              </div>
              <div className="content">{title}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ songs, }) => {
  return { songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
