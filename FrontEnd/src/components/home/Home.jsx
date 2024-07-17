import React from "react";
import "./home.scss";
import SongCard from "../SongCard";
import SingerCard from "../SingerCard";
import TitleBox from "../TitleBox";

export default function Home() {
  const songs = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://i.scdn.co/image/ab67616d0000b273a3eff72f62782fb589a492f9',
      src: 'https://freesound.org/data/previews/333/333779_5865470-lq.mp3'
    },
    {
      id: 2,
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      image: 'https://i.scdn.co/image/ab67616d0000b27383e9b06ccd219248b5301264',
      src: 'https://freesound.org/data/previews/245/245634_3908135-lq.mp3'
    },
    {
      id: 3,
      title: 'Levitating',
      artist: 'Dua Lipa',
      image: 'https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f',
      src: 'https://freesound.org/data/previews/578/578539_8037174-lq.mp3'
    },
    {
      id: 4,
      title: 'Bad Guy',
      artist: 'Billie Eilish',
      image: 'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce',
      src: 'https://freesound.org/data/previews/245/245624_3908135-lq.mp3'
    },
    {
      id: 5,
      title: 'Peaches',
      artist: 'Justin Bieber',
      image: 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431',
      src: 'https://freesound.org/data/previews/545/545492_6359659-lq.mp3'
    }
  ];

  const singers = [
    {
      id: 1,
      position: 'Artist',
      name: 'Taylor Swift',
      image: 'https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676'
    },
    {
      id: 2,
      position: 'Artist',
      name: 'Ariana Grande',
      image: 'https://i.scdn.co/image/ab67616d00001e025ef878a782c987d38d82b605'
    },
    {
      id: 3,
      position: 'Artist',
      name: 'Drake',
      image: 'https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b'
    },
    {
      id: 4,
      position: 'Artist',
      name: 'Post Malone',
      image: 'https://i.scdn.co/image/ab67616100005174e17c0aa1714a03d62b5ce4e0'
    },
    {
      id: 5,
      position: 'Artist',
      name: 'Kanye West',
      image: 'https://i.scdn.co/image/ab67706c0000da84947dfd5152ae184033a4aa7b'
    }
  ];

  const mixes = [
    {
      id: 1,
      artist: 'Lana Del Rey',
      title: 'Daily Mix 1',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb99cacf8acd5378206767261/1/en/default'
    },
    {
      id: 2,
      artist: 'Ariana Grande, Doja Cat, Megan Thee Stallion',
      title: 'Daily Mix 2',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb19c2790744c792d05570bb71/2/en/default'
    },
    {
      id: 3,
      artist: 'Drake, Future, Lil Wayne',
      title: 'Daily Mix 3',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb437b9e2a82505b3d93ff1022/3/en/default'
    },
    {
      id: 4,
      artist: 'Taylor Swift, Ed Sheeran',
      title: 'Daily Mix 4',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc8d3d98a1bccbe71393dbfbf/4/en/default'
    },
    {
      id: 5,
      artist: 'Billie Eilish, Khalid',
      title: 'Daily Mix 5',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe9348cc01ff5d55971b22433/5/en/default'
    }
  ];


  return(
      <div className="bg-backcolor m-6">
        <TitleBox title="Popular Songs" link='/' />
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
          {songs.map(item => <SongCard item={item} link={`/songs/${item.id}`} key={item.id}/>)}
        </div>
        <TitleBox title="Your Daily Mixes" link='/' />
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
          {mixes.map(item => <SongCard item={item} link={`/albums/${item.id}`} key={item.id}/>)}
        </div>
        <TitleBox title="Popular Artists" link='/' />
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
          {singers.map(item => <SingerCard artist={item} key={item.id}/>)}
        </div>
      </div>
  )
}
