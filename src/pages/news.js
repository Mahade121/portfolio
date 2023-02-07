import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function news() {
    return (
        <div className='news-page'>
            <Navbar></Navbar>
            <br /><br /><br /><br />
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
