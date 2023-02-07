import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '@/components/Navbar';

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
                <Navbar></Navbar>
                <div className="stories-container">
                    <br /><br />
                    <div className="content-section">
                        <h1 className='stories-title'>Stories</h1>
                        {stories.map((s, i) =>{
                            return(
                                <>
                                <p className='stories-para'>{s.description_part1}</p>
                                <div className='stories-img-container'>
                                    <Image src={s.image}  alt="" width='512' height='320' className='stories-img' />
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
