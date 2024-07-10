import React from 'react';
import { Link } from 'react-router-dom';

export default function TitleBox({title, link}) {
    return (
        <div>
            <header className='flex justify-between items-end mb-4 mt-6'>
                <h3 className='text-2xl text-white font-bold  tracking-tight'>{title}</h3>
                <Link className='text-link text-[12px] hover:underline font-semibold tracking-widest bottom-0' to={link}>Show all</Link>
            </header>
        </div>
    )
}