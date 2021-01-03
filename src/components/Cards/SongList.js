import React from 'react';

const SongCard = (props) => {
    let songs = props.songs;
    console.log("songs-", songs);

    const renderedSongs = songs.map((song, index) => {
        return (
            <div className="ui right sidebar inverted vertical menu">
                <div className="ui item" key={index}>
                    <h4>
                        {song}
                    </h4>
                </div>
            </div>
        );
    });


    return <div>{renderedSongs}</div>;    
}

export default SongCard;