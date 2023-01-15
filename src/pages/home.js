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
                {/* <IconContext.Provider
                    value={{ color: 'black', size: '22px' }}
                >
                    <div>
                        <FiSearch />
                    </div>
                </IconContext.Provider> */}
                <div className='search-input'>
                    <input type="text" placeholder='search here...' className='search' />
                </div>
            </header>
            <main>

            </main>
        </>
    )
}