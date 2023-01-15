import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';

export default function home() {
    return (
        <>
            <header>
                <div className="logo">
                    <h1>Arfius Al-din</h1>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Stories</li>
                        <li>Notes</li>
                        <li>Books</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li className='dropdown'><span className='more'>More</span> <IconContext.Provider
                            value={{ color: 'black', size: '17px', marginTop: '5px' }}>
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
            <main>
                <div className="hero-sec">
                    <h1 className='hero-title'>Hey! I Am <br /> Arfius Al-din</h1>
                    <p className='bio'>I am the founder and ceo of <span className='website-link'>e-freelancing.com</span> <br /> which is the oldest freelancing website on the internet. So come here and learn to earn.</p>
                    <button className='know-btn'>Know More</button>
                    <button className='blog-btn'>Read Blogs</button>
                </div>
            </main>
        </>
    )
}