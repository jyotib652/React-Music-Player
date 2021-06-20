import React from "react";


const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = async () => {
        // const selectedSong = songs.filter(state => state.id === id);
        // setCurrentSong(selectedSong[0]);
        await setCurrentSong(song);
        // Add Active State
        const newSong = songs.map(song => {
            if(song.id === id) {
                return {
                    ...song,
                    active: true
                };
            }else {
                return {
                    ...song,
                    active: false
                };
            }
        });
        setSongs(newSong);
        
        // Check if the song is playing
        if (isPlaying) audioRef.current.play();
        
    };
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;