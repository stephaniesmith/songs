import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if(!selectedSong) return <div>Select a song!</div>;
  const { title, duration } = selectedSong;


  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {title}
        <br/>
        Duration: {duration}
      </p>
    </div>
  );
};

SongDetail.propTypes = {

};

const mapStateToProps = ({ selectedSong }) => ({ selectedSong });

const mapDispatchToProps = {
  
};


export default connect(mapStateToProps)(SongDetail);
