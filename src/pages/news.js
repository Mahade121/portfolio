import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';

export default function news() {
    return (
        <div className='news-page'>
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
            </header><br /><br /><br /><br />
            <br />
            <h1 className="section-title">All News</h1>
            <br /><br />
            <div className="news-section">
                <div class="news-container">
                    <div class="news-card">
                        <div class="news_header">
                            <Image src="/arfiusaldin-news.jpg" alt="news_image" class="news_image" width="400" height="250" />
                        </div>
                        <div class="news_body">
                            <h5 className='news-date'>January 15, 2023</h5>
                            <h4 className='news-title'>What's new in 2022 Tech</h4>
                            <p className='news-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                        </div>
                    </div>
                    <div class="news-card">
                        <div class="news_header">
                            <Image src="/elon-mask.webp" alt="news_image" class="news_image" width="400" height="250" />
                        </div>
                        <div class="news_body">
                            <h5 className='news-date'>January 15, 2023</h5>
                            <h4 className='news-title'>What's new in 2022 Tech</h4>
                            <p className='news-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                        </div>
                    </div>
                    <div class="news-card">
                        <div class="news_header">
                            <Image src="/dollar.webp" alt="news_image" class="news_image" width="400" height="250" />
                        </div>
                        <div class="news_body">
                            <h5 className='news-date'>January 15, 2023</h5>
                            <h4 className='news-title'>What's new in 2022 Tech</h4>
                            <p className='news-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                        </div>
                    </div>
                    <div class="news-card">
                        <div class="news_header">
                            <Image src="/arfiusaldin-news.jpg" alt="news_image" class="news_image" width="400" height="250" />
                        </div>
                        <div class="news_body">
                            <h5 className='news-date'>January 15, 2023</h5>
                            <h4 className='news-title'>What's new in 2022 Tech</h4>
                            <p className='news-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                        </div>
                    </div>
                    <div class="news-card">
                        <div class="news_header">
                            <Image src="/elon-mask.webp" alt="news_image" class="news_image" width="400" height="250" />
                        </div>
                        <div class="news_body">
                            <h5 className='news-date'>January 15, 2023</h5>
                            <h4 className='news-title'>What's new in 2022 Tech</h4>
                            <p className='news-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                        </div>
                    </div>
                    <div class="news-card">
                        <div class="news_header">
                            <Image src="/dollar.webp" alt="news_image" class="news_image" width="400" height="250" />
                        </div>
                        <div class="news_body">
                            <h5 className='news-date'>January 15, 2023</h5>
                            <h4 className='news-title'>What's new in 2022 Tech</h4>
                            <p className='news-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                        </div>
                    </div>
                </div>
                <div className="news-view-more-btn-container">
                    <button class="news-view-more-btn" role="button">View More</button>
                </div>
            </div>
        </div>
    )
}
