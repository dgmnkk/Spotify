import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from './Icons';

export default function SingerCard({artist}) {
    return (
        <Link key={artist.id} to={`/artists/${artist.id}`} className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
            <div className='relative h-3/4'>
                <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={artist.image}/>
                <button
                    className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                    <Icon name="play"/>
                </button>
            </div>
            <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{artist.name}</span> <br/>
            <span className='mt-1 text-[14px] text-link'>{artist.position}</span>
        </Link>
    )
}