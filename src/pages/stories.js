import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

export default function stories() {
    const [stories , setStories] = useState([])
    
    const getStories = () =>{
        axios.get('http://127.0.0.1:8000/stories/')
        .then((response) => {
            const myData = response.data;
            setStories(myData)
            console.log(myData)
        })
    };
    useEffect(() => getStories(), []);
    
    return (
        <>
            <div className="stories-section">
                <header>
                    <div className="logo">
                        <h1>Arfius Al-din</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><Link className='nav-link' href={'/home'}>Home</Link></li>
                            <li><Link className='nav-link' href={'/stories'}>Stories</Link></li>
                            <li><Link className='nav-link' href={'/notes'}>Notes</Link></li>
                            <li><Link className='nav-link' href={'/books'}>Blogs</Link></li>
                            <li><Link className='nav-link' href={'/news'}>News</Link></li>
                            <li><Link className='nav-link' href={'/contact'}>Contact</Link></li>
                            <li className='dropdown'><span className='more'>More</span> <IconContext.Provider
                                value={{ color: 'white', size: '17px', marginTop: '5px' }}>
                                <div className='down-icon'>
                                    <BsChevronDown />
                                </div>
                            </IconContext.Provider></li>
                        </ul>
                    </nav>
                    <div className='search-input'>
                        <input type="text" placeholder='search here...' className='search' />
                    </div>
                </header>
                <div className="stories-container">
                    <br /><br />
                    <div className="content-section">
                        <h1 className='stories-title'>Stories</h1>
                        {stories.map((s, i) =>{
                            return(
                                <>
                                <p className='stories-para'>{s.description_part1}</p>
                                <div className='stories-img-container'>
                                    <Image src={`/{s.image}`}  alt="" width='512' height='320' className='stories-img' />
                                </div>
                                <p className='stories-para'>{s.description_part1}</p>
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}
