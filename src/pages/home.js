import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function home() {

    return (
        <>
            <Head>
                <title>Arfius Al-din</title>
            </Head>
            {/* <div className="absolute"> */}
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
                <div className="hero-sec mb-80">
                    <div className="content">
                        <h1 className='hero-title'>Hey! I Am <br /> Arfius Al-din</h1>
                        <div className="detail">
                            <p className='bio'>I am the founder and ceo of <a href='https://www.e-freelancing.com' target="_blank" className='website-link'>e-freelancing.com</a></p>
                            <Typewriter
                                options={{
                                    strings: ['which is the oldest freelancing website. ', 'So come here and learn to earn'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <div className="btn-container">
                            <button className='know-btn'>Know More</button>
                            <button className='read-btn'>Read Blogs</button>
                        </div>
                    </div>
                </div>


                <div className="latest-blog">
                    <h1 className='latest-blog-title'>Latest Blog</h1>
                    <div class="latest-blog-container">
                        <div class="card">
                            <div class="card__header">
                                <Image src="/blockchain-blog.jpeg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                {/* <span class="tag tag-blue">Technology</span> */}
                                <h5 className='card-date'>January 15, 2023</h5>
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                <span class="tag tag-blue">Technology</span>
                                <span class="tag tag-red">Technology</span>
                                <span class="tag tag-brown">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__header">
                                <Image src="/thumbnail-thanks.jpg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                {/* <span class="tag tag-blue">Technology</span> */}
                                <h5 className='card-date'>January 15, 2023</h5>
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                <span class="tag tag-red">Technology</span>
                                <span class="tag tag-brown">Technology</span>
                                <span class="tag tag-blue">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__header">
                                <Image src="/thumbnail-design.jpg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                {/* <span class="tag tag-blue">Technology</span> */}
                                <h5 className='card-date'>January 15, 2023</h5>
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                <span class="tag tag-blue">Technology</span>
                                <span class="tag tag-brown">Technology</span>
                                <span class="tag tag-red">Technology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
                <h1>hello world</h1>
            </main>
        </>
    )
}


