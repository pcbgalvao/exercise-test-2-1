
import React from 'react';

import SongList from './SongList';

const AlbumCard = (props) => {
    
    
    return (
        <div className="ui">
            <div className="">
                <h3>
                    {props.Album.name}
                </h3>
                <SongList songs={props.Album.songs}/>
            </div>
        </div>
    );
};


export default AlbumCard;
