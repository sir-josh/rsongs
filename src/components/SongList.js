import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedSongs } from '../actions';

class Songlist extends Component {
    renderList(){
        return this.props.songs.map((song, index) => (
            <div className='item' key={index}>
                <div className='right floated content'>
                    <button 
                        className='ui button primary'
                        onClick={() => this.props.selectedSongs(song)}
                    >
                        Select
                    </button>
                </div>
                <div className='content'>
                    {song.title}
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className='ui divided list'>{this.renderList()}</div>
        );
    };
}

const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs}
}

export default connect(mapStateToProps, { selectedSongs })(Songlist);