import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '2:55'},
        { title: 'Tie Me Down(with Elley Duhe)', duration: '3:11'},
        { title: 'Better', duration: '2:12'},
        { title: 'Happy Now', duration: '3:52'},
        { title: 'Don\'t Leave Me Alone', duration: '4:09'},
        { title: 'Girls Like You', duration: '3:55'}
    ];
}

const selectedSongReducer = (selectedSong = null, action ) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});