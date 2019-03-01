import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class SongList extends Component {
  static propTypes = {
    songs: PropTypes.array,
  };

  render() {
    const { songs } = this.props;
    return (
      <div className="ui divided list">
        {songs.map(({ title }) => {
          return (
            <div className="item" key={title}>
              <div className="right floated content">
                <button className="ui button primary">
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

const mapStateToProps = ({ songs }) => {
  return { songs };
};

export default connect(mapStateToProps)(SongList);
