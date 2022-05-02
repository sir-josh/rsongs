import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ songDetail: { title, duration }}) => {
    if (!songDetails) {
        return <h3>Select a song</h3>
    }

    return (
        <div>
            <h2>Details for:</h2>
            <p>{title}</p>
            <p> Duration {duration}</p>
        </div>
    );
}

const mapStateToProps = state =>{
    return { songDetail: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);