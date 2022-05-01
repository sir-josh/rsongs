export const selectedSongs = song => {
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};