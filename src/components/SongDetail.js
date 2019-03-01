import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  console.log(selectedSong);
  return (
    <div>
      SONG DETAIL
    </div>
  );
};

SongDetail.propTypes = {

};

const mapStateToProps = ({ selectedSong }) => ({ selectedSong });

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps)(SongDetail);
