import React from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

export default function stories() {
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
                            <li><Link className='nav-link' href={'/books'}>Books</Link></li>
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
                    <br /><br /><br />
                    <div className="content-section">
                        <h1 className='stories-title'>Stories</h1>
                        <p>Arfius Al-din (Bengali: আর্ফিয়াস আল-দ্বীন; 28 December 1996), a Bangladeshi entrepreneur who is the founder of e-freelancing.com (Bengali: ই-ফ্রিল্যান্সিং ডট কম) which is the oldest freelancing website on the internet (ref. Whois). The company motto is “ #Learn_to_Earn.”
                            Everyone tries to make a difference in their lives and help other people. That’s why it makes sense to become an entrepreneur, because not only do you get to establish a business growth, but you can help other people as well. That’s what Arfius Al-din did. He used his passion for IT and fashion to help many people from all over the world express themselves, find new ways to talk about the stuff they like, and truly push their lives to the next level.</p>
                        <div className='stories-img-container'>
                            <Image src="/arfiusaldin-news.jpg" alt="" width='512' height='320' className='stories-img' />
                        </div>
                        <p><b>Early life and studies</b><br />
                            Arfius Al-din was born in Rajshahi, Bangladesh. Where he lived for six years. When he was a child, his passion was cricket and football, and he did want to become a cricket player. Destiny took him to a new place. He studied at the Dhanmondi Government Boys’ High School, acquiring a B.sc in electrical and electronic engineering. This was the time when Arfius Al-din started pursuing his passion for a career into IT Sector as an Entrepreneur.</p>
                    </div>
                    <div className="youtube-section">

                    </div>
                </div>
            </div>
        </>
    )
}
