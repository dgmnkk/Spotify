import React from 'react';
// import { Link } from 'react-router-dom';
import SongListItem from "./SongListItem";

export default function SongsList({songs}) {
    return (
       <div>
           {songs.map((song, index) => (<SongListItem song={song} index={index + 1} />))}
       </div>
    )
}