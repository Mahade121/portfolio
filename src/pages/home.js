import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.defaults.color = '#fff';

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024*', '2025*', '2026*'];

const data = {
    labels,
    datasets: [
        {
            label: 'Number of freelancer',
            data: [57300000, 59700000, 62200000, 64800000, 70400000, 73300000, 76400000,],
            borderColor: '#ffb8b8',
            backgroundColor: '#ffb8b8',
        }
    ],
};

const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};


const data2 = {
    labels,
    datasets: [
        {
            label: 'Freelancing Industry Size',
            data: [155000000, 203000000, 253000000, 301000000, 374000000, 503000000, 456800000,],
            borderColor: '#3ae374',
            backgroundColor: '#3ae374',
        }
    ],
};

export default function home() {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mwtmw4u', 'template_yonuifd', form.current, 'JXgEjXdmo7cxAcJIR')
            .then((result) => {
                console.log(result.text);
                alert("Succefully sent")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Head>
                <title>Arfius Al-din</title>
            </Head>
            {/* <div className="absolute"> */}
<<<<<<< HEAD
            <header>
                <div className="logo">
                    <h1>Arfius Al-din</h1>
                </div>
                <div className="desktop-navigation">
                    <nav>
                        <ul>
                            <li><Link className='nav-link' href={'/home'}>Home</Link></li>
                            <li><Link className='nav-link' href={'/stories'}>Stories</Link></li>
                            <li><Link className='nav-link' href={'/notes'}>Notes</Link></li>
                            <li><Link className='nav-link' href={'/blogs'}>Blogs</Link></li>
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
                </div>
                <div className="mobile-navigation">
                    <IconContext.Provider
                        value={{ color: 'white', size: '30px'}}>
                        <div className='bar-icon'>
                            <FaBars />
                        </div>
                    </IconContext.Provider>
                </div>
            </header>
=======
            <Navbar></Navbar>
>>>>>>> 3d28c8975dc060e0db4036aabe339f8e4fd1c545
            <main className='mobile-main-view'>
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

                <div className="dreams">
                    <h1>Dreams To Reality</h1>
                    <p className='dreams-p'> আপনি এখন কোন ধাপে আটকে আছেন? </p>
                    <IconContext.Provider
                        value={{ color: 'white', size: '70px', marginTop: '5px' }}>
                        <div>
                            <BiUser /><br />
                        </div>
                    </IconContext.Provider>

                    <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                    <button className='dream-btn' onClick={() => setBtn1(!btn1)}>ফ্রিল্যান্সিং কি?</button><br />
                    {btn1 && (
                        <>
                            <br /><div className="popup-box transform">
                                <div className="popupbox-content">
                                    <h4 className='popupbox-title'>Information</h4>
                                    <div className="popupbox-btn">
                                        <button>Early Life</button>
                                        <button>Education</button>
                                        <button>Occupation</button>
                                        <button>Known For</button>
                                        <button>Personal Life</button>
                                        <button>Achivement</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                    <button className='dream-btn' onClick={() => setBtn2(!btn2)}>ফ্রিল্যান্সিং ও বিশ্ব!</button><br />
                    {btn2 && (
                        <>
                            <br /><div className="popup-box transform">
                                <h4 className='popupbox-title'>Why Choose E-freelancing</h4>
                                <div className="popupbox-btn">
                                    <button></button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                </div>
                            </div>
                        </>
                    )}

                    <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                    <button className='dream-btn' onClick={() => setBtn3(!btn3)}>ই-ফ্রিল্যান্সিং ডটকমের লক্ষ্য</button><br />
                    {btn3 && (
                        <>
                            <br /><div className="popup-box transform">
                                <h4 className='popupbox-title'>Plan</h4>
                                <div className="popupbox-btn">
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                </div>
                            </div>
                        </>
                    )}

                    <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                    <button className='dream-btn' onClick={() => setBtn3(!btn3)}>ই-ফ্রিল্যান্সিং ডটকমের মাধ্যমে কীভাবে আয় করবো</button><br />
                    {btn3 && (
                        <>
                            <br /><div className="popup-box transform">
                                <h4 className='popupbox-title'>Plan</h4>
                                <div className="popupbox-btn">
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                    <button>Demo</button>
                                </div>
                            </div>
                        </>
                    )}

                    <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                    <IconContext.Provider
                        value={{ color: 'white', size: '70px', marginTop: '20px' }}>
                        <div>
                            <br /><AiOutlineTrophy /><br />
                        </div>
                    </IconContext.Provider>
                </div>

                <div className="bar-chart">
                    <div className="freelance-user">
                        <Line options={options} data={data} />
                    </div>
                    <div className="industry-growth">
                        <Line options={options2} data={data2} />
                    </div>
                </div>

                <div className="latest-blog">
                    <h1 className='sec-title'>Latest Blog</h1>
                    <div class="latest-blog-container">
                        <div class="card">
                            <div class="card__header">
                                <Image src="/blockchain-blog.jpeg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                <h5 className='card-date'>January 15, 2023</h5>
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                    <span class="tag tag-purple">Technology</span>
                                    <span class="tag tag-green">Technology</span>
                                    <span class="tag tag-yellow">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__header">
                                <Image src="/thumbnail-thanks.jpg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                <h5 className='card-date'>January 15, 2023</h5>
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                    <span class="tag tag-green">Technology</span>
                                    <span class="tag tag-yellow">Technology</span>
                                    <span class="tag tag-purple">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__header">
                                <Image src="/thumbnail-design.jpg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                <h5 className='card-date'>January 15, 2023</h5>
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                    <span class="tag tag-purple">Technology</span>
                                    <span class="tag tag-yellow">Technology</span>
                                    <span class="tag tag-green">Technology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="course mt-40">
                    <h1 className='our-courses-title txt-center'>Visit Our Courses</h1>
                    <div className="course-cards">
                        <div className="course-card">
                            <button className='offline-btn'>Offline</button>
                            <div className="mx-40">
                                <div className="course-title">
                                    <div className="course-icon">
                                        <Image src="/ps.png" alt="card__image" width="33" height="33" /><br />
                                        <Image src="/ai.png" alt="card__image" width="33" height="33" />
                                    </div>
                                    <div className="course-name">
                                        <h1>Graphic & <br /> Ui design</h1>
                                    </div>
                                </div>
                                <div className="course-detail">
                                    <div className="course-detail-content">
                                        <h3>Course: <span className='green-txt'>Graphic Design</span></h3>
                                        <h3>Mentor: <span className='green-txt'>Rafsan Jany</span></h3>
                                        <h3>Classes: <span className='green-txt'>10</span></h3>
                                        <h3>Seats left: <span className='green-txt'>10</span></h3>
                                    </div>
                                    <div className="view-course-btn">
                                        <button className='visit-btn'>Visit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-card">
                            <button className='offline-btn'>Offline</button>
                            <div className="mx-40">
                                <div className="course-title">
                                    <div className="course-icon">
                                        <Image src="/ps.png" alt="card__image" width="33" height="33" /><br />
                                        <Image src="/ai.png" alt="card__image" width="33" height="33" />
                                    </div>
                                    <div className="course-name">
                                        <h1>Graphic & <br /> Ui design</h1>
                                    </div>
                                </div>
                                <div className="course-detail">
                                    <div className="course-detail-content">
                                        <h3>Course: <span className='green-txt'>Graphic Design</span></h3>
                                        <h3>Mentor: <span className='green-txt'>Rafsan Jany</span></h3>
                                        <h3>Classes: <span className='green-txt'>10</span></h3>
                                        <h3>Seats left: <span className='green-txt'>10</span></h3>
                                    </div>
                                    <div className="view-course-btn">
                                        <button className='visit-btn'>Visit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-card">
                            <button className='offline-btn'>Offline</button>
                            <div className="mx-40">
                                <div className="course-title">
                                    <div className="course-icon">
                                        <Image src="/ps.png" alt="card__image" width="33" height="33" /><br />
                                        <Image src="/ai.png" alt="card__image" width="33" height="33" />
                                    </div>
                                    <div className="course-name">
                                        <h1>Graphic & <br /> Ui design</h1>
                                    </div>
                                </div>
                                <div className="course-detail">
                                    <div className="course-detail-content">
                                        <h3>Course: <span className='green-txt'>Graphic Design</span></h3>
                                        <h3>Mentor: <span className='green-txt'>Rafsan Jany</span></h3>
                                        <h3>Classes: <span className='green-txt'>10</span></h3>
                                        <h3>Seats left: <span className='green-txt'>10</span></h3>
                                    </div>
                                    <div className="view-course-btn">
                                        <button className='visit-btn'>Visit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-card">
                            <button className='offline-btn'>Offline</button>
                            <div className="mx-40">
                                <div className="course-title">
                                    <div className="course-icon">
                                        <Image src="/ps.png" alt="card__image" width="33" height="33" /><br />
                                        <Image src="/ai.png" alt="card__image" width="33" height="33" />
                                    </div>
                                    <div className="course-name">
                                        <h1>Graphic & <br /> Ui design</h1>
                                    </div>
                                </div>
                                <div className="course-detail">
                                    <div className="course-detail-content">
                                        <h3>Course: <span className='green-txt'>Graphic Design</span></h3>
                                        <h3>Mentor: <span className='green-txt'>Rafsan Jany</span></h3>
                                        <h3>Classes: <span className='green-txt'>10</span></h3>
                                        <h3>Seats left: <span className='green-txt'>10</span></h3>
                                    </div>
                                    <div className="view-course-btn">
                                        <br /><br /><br />
                                        <button className='visit-btn'>Visit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br /><br />
                    </div>
                    <div className="view-more-btn-container">
                        <button class="view-more-btn" role="button">View More</button>
                    </div>
                </div>

                <div className="latest-blog">
                    <h1 className='sec-title'>Latest Notes</h1>
                    <div class="latest-notes-container">
                        <div class="notes-card">
                            <div class="card__header">
                                <Image src="/blockchain-blog.jpeg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                    <span class="tag tag-purple">Technology</span>
                                    <span class="tag tag-yellow">Technology</span>
                                    <span class="tag tag-green">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div class="notes-card">
                            <div class="card__header">
                                <Image src="/thumbnail-thanks.jpg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                    <span class="tag tag-purple">Technology</span>
                                    <span class="tag tag-yellow">Technology</span>
                                    <span class="tag tag-green">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div class="notes-card">
                            <div class="card__header">
                                <Image src="/thumbnail-design.jpg" alt="card__image" class="card__image" width="1080" height="250" />
                            </div>
                            <div class="card__body">
                                <h4 className='card-title'>What's new in 2022 Tech</h4>
                                <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi... <span><Link className='readmore-btn' href={'https://www.labnol.org/'}>Read More</Link></span> </p>
                                <div className="tag-footer">
                                    <span class="tag tag-purple">Technology</span>
                                    <span class="tag tag-yellow">Technology</span>
                                    <span class="tag tag-green">Technology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view-more-btn-container">
                        <button class="view-more-btn" role="button">View More</button>
                    </div>
                </div>

                <div className="books-section">
                    <h1 className="books-section-title">Books</h1>
                    <div className="books-container">
                        <div className="book-card">
                            <div className="book-header">
                                <Image src="/book1.webp" alt="book_image" class="book_image" width="400" height="400" />
                            </div>
                            <div className="book-body">
                                <h4 className="book-title">Amusing Graphic Design Handbook</h4><br />
                                <p className="book-detail">Amusing Graphic Design Handbook Arfius Al-din Arfius Al-din on Amazon.com. *FREE* shipping on qualifying offers</p><br />
                                <div className="buy-now-btn-wraper">
                                    <button className="buy-now-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="book-card">
                            <div className="book-header">
                                <Image src="/book1.webp" alt="book_image" class="book_image" width="400" height="400" />
                            </div>
                            <div className="book-body">
                                <h4 className="book-title">Amusing Graphic Design Handbook</h4><br />
                                <p className="book-detail">Amusing Graphic Design Handbook Arfius Al-din Arfius Al-din on Amazon.com. *FREE* shipping on qualifying offers</p><br />
                                <div className="buy-now-btn-wraper">
                                    <button className="buy-now-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-section">
                    <h1 className='news-section-title'>News & Update</h1>
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
                    </div>
                </div>

                <footer>
                    <button className='talk-btn'>Let's Talk</button>
                    <div className="footer-middle">
                        <div className="social-media">
                            <div className="nav-side">
                                <div className="about">
                                    <h2>About</h2>
                                    <li className='footer-text'>Education</li>
                                    <li className='footer-text'>Press and News</li>
                                    <li className='footer-text'>Privacy Policy</li>
                                    <li className='footer-text'>Terms of service</li>
                                </div>
                                <div className="community">
                                    <h2>Community</h2>
                                    <li className='footer-text'>Blogs</li>
                                    <li className='footer-text'>Linkedin</li>
                                    <li className='footer-text'>Youtube</li>
                                    <li className='footer-text'>Twitter</li>
                                </div>
                                <div className="address">
                                    <h2>Address</h2>
                                    <h5 className='footer-text'>35/2, Monipuri Para, Dhaka-1215</h5>
                                </div>
                            </div>
                        </div>
                        <div className="sub-email">
                            <h2>Subscribe To email from Arfius</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" placeholder='First Name' className='sub-email-inp' name='name' /><br />
                                <input type="text" placeholder='Last Name' className='sub-email-inp' /><br />
                                <input type="email" placeholder='E-mail' className='sub-email-inp' name='email' /><br />
                                <input type="submit" className='submit-btn' value="Send" />
                            </form>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>©2023 arfiusaldin.com ALL Rights Reserved</p>
                    </div>
                </footer>

            </main>
        </>
    )
}


