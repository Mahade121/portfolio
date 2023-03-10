import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';




const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
  
    useEffect(() => {
      const urls = [
        "http://127.0.0.1:8000/blog/",
      ];
  
      Promise.all(
        urls.map((url) =>
          fetch(url)
            .then((response) => response.json())
            .then((data) => setResults(data))
            .catch((error) => console.log("There was a problem!", error))
        ),
        []
      );
    }, []);
  
    const handleChange = (e) => {
      e.preventDefault();
      setInput(e.target.value.toLowerCase());
    };
  
    return (
        <div>
            <header>
                <div className="logo">
                    <h1><Link href={'/home'} className="logo-link">Arfius Al din</Link></h1>
                </div>
                <div className="desktop-navigation">
                    <nav className='desk-nav'>
                        <ul className='desk-ul'>
                            <li><Link className='nav-link' href={'/home'}>Home</Link></li>
                            <li><Link className='nav-link' href={'/stories'}>Stories</Link></li>
                            <li><Link className='nav-link' href={'/notes'}>Notes</Link></li>
                            <li><Link className='nav-link' href={'/blogs'}>Blogs</Link></li>
                            <li><Link className='nav-link' href={'/news'}>News</Link></li>
                            <li><Link className='nav-link' href={'/contact'}>Contact</Link></li>
                            <div className="dropdown-container">
                            <li className='dropdown'><span className='more'>More</span> <IconContext.Provider
                                value={{ color: 'white', size: '17px', marginTop: '5px' }}>
                                <div className='down-icon'>
                                    <BsChevronDown />
                                </div>
                            </IconContext.Provider></li>
                            <div className="dropdown-nav">
                                <li><Link className='nav-link-dropdown' href={'/education'}>Education</Link></li>
                                <li><Link className='nav-link-dropdown' href={'/news'}>Press and News</Link></li>
                                <li><Link className='nav-link-dropdown' href={'/privacypoicy'}>Privacy Policy</Link></li>
                                <li><Link className='nav-link-dropdown' href={'/termsOfService'}>Terms of Service</Link></li><br />
                            </div>
                        </div>
                            {/* <li className='dropdown'><span className='more'>More</span> <IconContext.Provider
                                value={{ color: 'white', size: '17px', marginTop: '5px', cursor: 'pointer' }}>
                                <div className='down-icon'>
                                    <BsChevronDown />
                                </div>
                            </IconContext.Provider></li>
                            <div className="dropdown-nav">
                                <li><Link className='nav-link-dropdown' href={'/books'}>Education</Link></li>
                                <li><Link className='nav-link-dropdown' href={'/news'}>Press and News</Link></li>
                                <li><Link className='nav-link-dropdown' href={'/contact'}>Privacy Policy</Link></li>
                                <li><Link className='nav-link-dropdown' href={'/contact'}>Terms of Service</Link></li><br />
                            </div> */}
                        </ul>
                    </nav>
                    <div className='search-input'>
                    <div className="dropdown-container">
                            <li className='dropdown'>
                            <input
                                type="text"
                                name="query"
                                value={input}
                                id="search"
                                className='form-control'
                                placeholder="search blogs"
                                onChange={handleChange}
                                />
                                </li>
                            <div className="dropdown-nav">
                            
                            {results.slice(0, 15)
                                .filter((i) =>
                                i.title.toLowerCase().includes(input))
                                .map((result, index) => {
                                    return (

                                    <div className="results" key={index}>
                                        <li><Link className='nav-link-dropdown' href={`/blogs/${result.id}`}>{result.title}</Link></li>
                                    </div>
                                    );
                                })}
                                        
                            </div>
                        </div>
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
            <nav className={isNavExpanded ? "mobile-nav animated zoomIn" : "navigation-menu"
            }>
                <ul>
                    <li><Link className='ph-nav-link' href={'/home'}>Home</Link></li><br />
                    <li><Link className='ph-nav-link' href={'/stories'}>Stories</Link></li><br />
                    <li><Link className='ph-nav-link' href={'/notes'}>Notes</Link></li><br />
                    <li><Link className='ph-nav-link' href={'/blogs'}>Blogs</Link></li><br />
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
