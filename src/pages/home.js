import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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
import faker from 'faker';

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
                                {/* <span class="tag tag-purple">Technology</span> */}
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
                                {/* <span class="tag tag-purple">Technology</span> */}
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
                                {/* <span class="tag tag-purple">Technology</span> */}
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


