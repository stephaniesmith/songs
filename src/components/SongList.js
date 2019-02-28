import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class SongList extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        Song List
      </div>
    );
  }
}

export default connect()(SongList);
