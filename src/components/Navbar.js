import Link from 'next/link';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <div>
            <header>
                <div className="logo">
                    <h1>Arfius Al-din</h1>
                </div>
                <div className="desktop-navigation">
                    <nav className='desk-nav'>
                        <ul className='desk-ul'>
                            <li><Link className='nav-link' href={'/home'}>Home</Link></li>
                            <li><Link className='nav-link' href={'/stories'}>Stories</Link></li>
                            <li><Link className='nav-link' href={'/notes'}>Notes</Link></li>
                            <li><Link className='nav-link' href={'/books'}>Blogs</Link></li>
                            <li><Link className='nav-link' href={'/news'}>News</Link></li>
                            <li><Link className='nav-link' href={'/contact'}>Contact</Link></li>
                            <li className='dropdown'><span className='more'>More</span> <IconContext.Provider
                                value={{ color: 'white', size: '17px', marginTop: '5px', cursor: 'pointer' }}>
                                <div className='down-icon'>
                                    <BsChevronDown />
                                </div>
                            </IconContext.Provider></li>
                        </ul>
                    </nav>
                    <div className='search-input'>
                        <input type="text" placeholder='search here...' className='search' />
                    </div>
                </div>
                <div className="mobile-navigation">
                    <button className="hamburger" onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                        {/* icon from heroicons.com */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </header>
            <nav className={isNavExpanded ? "mobile-nav" : "navigation-menu"
            }>
                <ul>
                    <li><Link className='ph-nav-link' href={'/home'}>Home</Link></li><br />
                    <li><Link className='ph-nav-link' href={'/stories'}>Stories</Link></li><br />
                    <li><Link className='ph-nav-link' href={'/notes'}>Notes</Link></li><br />
                    <li><Link className='ph-nav-link' href={'/books'}>Blogs</Link></li><br />
                    <li><Link className='ph-nav-link' href={'/news'}>News</Link></li><br />
                    <li><Link className='ph-nav-link' href={'/contact'}>Contact</Link></li><br />
                    <li className='dropdown'><span className='more'>More</span> <IconContext.Provider
                        value={{ color: 'white', size: '17px', marginTop: '5px' }}>
                        <div className='down-icon'>
                            <BsChevronDown />
                        </div>
                    </IconContext.Provider></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
