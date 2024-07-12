import React from 'react';
import SongsList from "./SongsList";
import {Link} from "react-router-dom";

export default function AlbumDetails() {
    const album = {
        id: 1,
        artist: 'Lana Del Rey',
        year: 2020,
        title: 'Born to Die',
        image: 'https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64',
        songs: [
            {
                id: 1,
                title: 'Summertime Sadness',
                artist: 'Lana Del Rey',
                image: 'https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7',
                src: 'https://freesound.org/data/previews/333/333779_5865470-lq.mp3'
            },
            {
                id: 2,
                title: 'Young and Beautiful',
                artist: 'Lana Del Rey',
                image: 'https://i.scdn.co/image/ab67616d0000b273d7fb3e4c63020039d1cff6b2',
                src: 'https://freesound.org/data/previews/245/245634_3908135-lq.mp3'
            },
            {
                id: 3,
                title: 'Born to Die',
                artist: 'Lana Del Rey',
                image: 'https://i.scdn.co/image/ab67616d0000b273a1c37f3fd969287c03482c3b',
                src: 'https://freesound.org/data/previews/578/578539_8037174-lq.mp3'
            },
            {
                id: 4,
                title: 'Blue Jeans',
                artist: 'Lana Del Rey',
                image: 'https://i.scdn.co/image/ab67616d0000b273b26b3107bdaeb0d9a4745e0a',
                src: 'https://freesound.org/data/previews/245/245624_3908135-lq.mp3'
            },
            {
                id: 5,
                title: 'Video Games',
                artist: 'Lana Del Rey',
                image: 'https://i.scdn.co/image/ab67616d00001e0295e2fd1accb339fa14878190',
                src: 'https://freesound.org/data/previews/545/545492_6359659-lq.mp3'
            }
        ]
    }

    const artist = {
        id: 1,
        name: "Lana Del Rey",
        image: "https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261"
    }

    return (
        <div className="h-full">
           <div className="flex flex-row w-full mb-10 p-6 bg-footer items-center">
               <img className="w-64 h-64"  src={album.image} alt="Album" />
               <div className="h-64 ml-6 w-full flex flex-col justify-between">
                   <p className="font-semibold text-white text-[16px] whitespace-nowrap">Album</p>
                   <h3 className="text-9xl text-white font-bold tracking-tight">{album.title}</h3>
                   <div className="flex flex-row items-center">
                       <img className="w-10 h-10 rounded-full mr-2" src={artist.image} alt={artist.name}/>
                       <Link to={`/artists/${artist.id}`}>
                           <p className="font-semibold text-white text-[16px] whitespace-nowrap mr-1 hover:underline">{artist.name}</p>
                       </Link>
                       <p className="font-semibold text-white text-[16px] whitespace-nowrap mr-1">&#183;</p>
                       <p className="font-semibold text-white text-[16px] whitespace-nowrap">{album.year}</p>
                   </div>
               </div>
           </div>
            <SongsList songs={album.songs}/>
        </div>
    )
}