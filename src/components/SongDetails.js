import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ songInfo}) => {
    if (!songInfo) {
        return <h3>Select a song</h3>
    }

    return (
        <div>
            <h2>Details for:</h2>
            <p> Song title: <b>{songInfo.title}</b></p>
            <p> Song duration: <b>{songInfo.duration}</b></p>
        </div>
    );
}

const mapStateToProps = state =>{
    return { songInfo: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);