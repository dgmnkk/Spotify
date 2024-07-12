import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from "./Icons";

export default function SongListItem({song, index}) {
    return (
        <div className="w-full flex flex-row items-center hover:bg-menubg bg-footer py-2 p-4 cursor-pointer mb-2 group">
            <h3 className="fmt-1 text-[14px] text-link mr-3">{index}.</h3>
            <div className="flex-1 flex flex-row justify-between items-center">
                <img className="w-10 h-10" src={song.image} alt={song.title}/>
                <div className="flex-1 flex flex-col justify-center mx-3">
                    <Link to={`/songs/${song.id}`}>
                        <p className="font-semibold text-white text-[16px] whitespace-nowrap hover:underline">
                            {song.title}
                        </p>
                    </Link>
                    <Link to={`/artists/${song.artist.id}`}>
                        <p className="text-[14px] text-link hover:underline">
                            {song.artist}
                        </p>
                    </Link>
                </div>
                <button className="w-12 h-12 bg-primary transition-opacity rounded-full flex items-center shadow-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 justify-center">
                    <Icon name="pplay"/>
                </button>
            </div>
        </div>
    )
}