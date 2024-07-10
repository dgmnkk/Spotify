import React from 'react';
import TitleBox from "./TitleBox";
import SongCard from "./SongCard";

export default function ArtistDetails() {
    const artist = {
        name: "Lana Del Rey",
        image: "https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261"
    }
    const songs = [
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
    ];
    const albums = [
        {
            id: 1,
            artist: 'Lana Del Rey',
            title: 'Born to Die',
            image: 'https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64'
        },
        {
            id: 2,
            artist: 'Lana Del Rey',
            title: 'Ultraviolence',
            image: 'https://i.scdn.co/image/ab67616d0000b2730a921fb6a0b94a6d2c6c6c71'
        },
        {
            id: 3,
            artist: 'Lana Del Rey',
            title: 'Honeymoon',
            image: 'https://i.scdn.co/image/ab67616d0000b273a3b3f48ca81acacb3ad4ec8a'
        },
        {
            id: 4,
            artist: 'Lana Del Rey',
            title: 'Lust for Life',
            image: 'https://i.scdn.co/image/ab67616d0000b27395e2fd1accb339fa14878190'
        },
        {
            id: 5,
            artist: 'Lana Del Rey',
            title: 'Norman Fucking Rockwell!',
            image: 'https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9'
        }
    ];

    return (
        <div>
            <div>
                <img src={artist.image} className="w-full h-96 object-cover" />
                <h1 className="relative bottom-40 ml-10 text-8xl text-white font-bold  tracking-tight">{artist.name}</h1>
            </div>
            <div className="m-10 relative bottom-20">
                <TitleBox title="Songs" link='/' />
                <div className='grid grid-cols-5 gap-x-6 mb-8'>
                    {songs.map(item => <SongCard item={item} link='/' key={item.id}/>)}
                </div>
                <TitleBox title="Albums" link='/' />
                <div className='grid grid-cols-5 gap-x-6 mb-8'>
                    {albums.map(item => <SongCard item={item} link='/' key={item.id}/>)}
                </div>
            </div>
        </div>
    )
}