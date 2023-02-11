import { IconBase, IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

// SOCIAL MEDIA ICONS
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

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

import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import Notes from '@/pages/notes';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

export default function Landing() {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);
    const [btn5, setBtn5] = useState(false);
    const [btn6, setBtn6] = useState(false);
    const [btn7, setBtn7] = useState(false);
    const [btn8, setBtn8] = useState(false);


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

// DreamCategory

    const [DreamCategory, setDreamCategory] = useState([]);

    const getDreamCategory =()=>{
        axios.get('http://127.0.0.1:8000/DreamCategory/').then((response) =>{
            const myData = response.data;
            setDreamCategory(myData)
        })
    };
    useEffect(()=> getDreamCategory(), []);

// Dream

    const [Dream, setDream] = useState([]);

    const getDream =()=>{
        axios.get('http://127.0.0.1:8000/Dream/').then((response) =>{
            const myData = response.data;
            setDream(myData)
        })
    };
    useEffect(()=> getDream(), []);

// Blogs 
        const [blog,setBlog] = useState([]);

        const getBlog =()=>{
            axios.get('http://127.0.0.1:8000/blog/').then((response) =>{
                const myData = response.data;
                setBlog(myData)
            })
        };
        useEffect(()=> getBlog(), []);

// Notes
        const [notes, setNote] = useState([])

        const getNote = () =>{
        axios.get('http://127.0.0.1:8000/note/')
        .then(
            (response) =>{
            const myData = response.data;
            // console.log(myData)
            setNote(myData)
            }
        )
        };
        useEffect(() => getNote(), []);

// News 
const [news,setNews] = useState([]);
    const getNews =()=>{
        axios.get('http://127.0.0.1:8000/news/').then((response) =>{
            const myData = response.data;
            setNews(myData)
        })
    };
    useEffect(()=> getNews(), []);

// Course 

    const [course,setCourse] = useState([]);
    const getCourse =()=>{
        axios.get('http://127.0.0.1:8000/course/').then((response) =>{
            const myData = response.data;
            setCourse(myData)
        })
    };
    useEffect(()=> getCourse(), []);

    return (
        <>
            <Head>
                <title>Arfius Al-din</title>
            </Head>
            {/* <div className="absolute"> */}

            <Navbar></Navbar>
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
                            <button className='know-btn'><Link href={'/stories'} className="know-btn-link">Know More</Link></button>
                            <Link href={'/blogs'} className="read-btn">Read Blogs</Link>
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

                    {DreamCategory.map((c,i)=>{
                        return (
                            <>
                            {
                            c.id == 1?
                            <>
                            <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                                <button className='dream-btn' onClick={() => setBtn1(!btn1)}>{c.name}</button><br />
                                {btn1 && (
                                    <>
                                        <br /><div className="popup-box transform">
                                            <div className="popupbox-content">
                                                <h4 className='popupbox-title'>Information</h4>
                                                <div className="popupbox-btn">
                                                    {Dream.map((d, y) =>{
                                                        return ( 
                                                            <>
                                                                {
                                                                c.id == d.category? <button>{d.title}</button>: null
                                                                }
                                                                
                                                            </>
                                                        )
                                                    })}
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                            :c.id==2?
                            <>
                            <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                                <button className='dream-btn' onClick={() => setBtn2(!btn2)}>{c.name}</button><br />
                                {btn2 && (
                                    <>
                                        <br /><div className="popup-box transform">
                                            <div className="popupbox-content">
                                                <h4 className='popupbox-title'>Information</h4>
                                                <div className="popupbox-btn">
                                                    {Dream.map((d, y) =>{
                                                        return ( 
                                                            <>
                                                                {
                                                                c.id == d.category? <button>{d.title}</button>: null
                                                                }
                                                                
                                                            </>
                                                        )
                                                    })}
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                            :c.id == 3?
                            <>
                            <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                                <button className='dream-btn' onClick={() => setBtn3(!btn3)}>{c.name}</button><br />
                                {btn3 && (
                                    <>
                                        <br /><div className="popup-box transform">
                                            <div className="popupbox-content">
                                                <h4 className='popupbox-title'>Information</h4>
                                                <div className="popupbox-btn">
                                                    {Dream.map((d, y) =>{
                                                        return ( 
                                                            <>
                                                                {
                                                                c.id == d.category? <button>{d.title}</button>: null
                                                                }
                                                                
                                                            </>
                                                        )
                                                    })}
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                            :c.id == 4?
                            <>
                            <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                                <button className='dream-btn' onClick={() => setBtn4(!btn4)}>{c.name}</button><br />
                                {btn4 && (
                                    <>
                                        <br /><div className="popup-box transform">
                                            <div className="popupbox-content">
                                                <h4 className='popupbox-title'>Information</h4>
                                                <div className="popupbox-btn">
                                                    {Dream.map((d, y) =>{
                                                        return ( 
                                                            <>
                                                                {
                                                                c.id == d.category? <button>{d.title}</button>: null
                                                                }
                                                                
                                                            </>
                                                        )
                                                    })}
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                            :c.id == 5?
                            <>
                            <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                                <button className='dream-btn' onClick={() => setBtn5(!btn5)}>{c.name}</button><br />
                                {btn5 && (
                                    <>
                                        <br /><div className="popup-box transform">
                                            <div className="popupbox-content">
                                                <h4 className='popupbox-title'>Information</h4>
                                                <div className="popupbox-btn">
                                                    {Dream.map((d, y) =>{
                                                        return ( 
                                                            <>
                                                                {
                                                                c.id == d.category? <button>{d.title}</button>: null
                                                                }
                                                                
                                                            </>
                                                        )
                                                    })}
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                            :c.id == 6?
                            <>
                            <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                                <button className='dream-btn' onClick={() => setBtn6(!btn6)}>{c.name}</button><br />
                                {btn6 && (
                                    <>
                                        <br /><div className="popup-box transform">
                                            <div className="popupbox-content">
                                                <h4 className='popupbox-title'>Information</h4>
                                                <div className="popupbox-btn">
                                                    {Dream.map((d, y) =>{
                                                        return ( 
                                                            <>
                                                                {
                                                                c.id == d.category? <button>{d.title}</button>: null
                                                                }
                                                                
                                                            </>
                                                        )
                                                    })}
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                            :c.id == 7?
                            <>
                            <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                                <button className='dream-btn' onClick={() => setBtn7(!btn7)}>{c.name}</button><br />
                                {btn7 && (
                                    <>
                                        <br /><div className="popup-box transform">
                                            <div className="popupbox-content">
                                                <h4 className='popupbox-title'>Information</h4>
                                                <div className="popupbox-btn">
                                                    {Dream.map((d, y) =>{
                                                        return ( 
                                                            <>
                                                                {
                                                                c.id == d.category? <button>{d.title}</button>: null
                                                                }
                                                                
                                                            </>
                                                        )
                                                    })}
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                            :c.id == 8?
                            <>
                            <Image src="/arrow.png" alt="arrow" className="arrow" width="36" height="130" /><br />
                                <button className='dream-btn' onClick={() => setBtn8(!btn8)}>{c.name}</button><br />
                                {btn8 && (
                                    <>
                                        <br /><div className="popup-box transform">
                                            <div className="popupbox-content">
                                                <h4 className='popupbox-title'>Information</h4>
                                                <div className="popupbox-btn">
                                                    {Dream.map((d, y) =>{
                                                        return ( 
                                                            <>
                                                                {
                                                                c.id == d.category? <button>{d.title}</button>: null
                                                                }
                                                                
                                                            </>
                                                        )
                                                    })}
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                            :null
                            }

                            </>
                        )
                    })}
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
                        {blog.map((c,i)=>{
                            return (
                                <div class="card">
                                <div class="card__header">
                                    <Image src={c.image} alt="card__image" class="card__image" width="1080" height="250" />
                                </div>
                                <div class="card__body">
                                    <h5 className='card-date'>{c.date}</h5>
                                    <h4 className='card-title'>{c.title}</h4>
                                    <p className='card-detail'><span dangerouslySetInnerHTML={{__html: c.description.slice(0, 200)}}></span><span><Link className='readmore-btn' href={`/blogs/${c.id}`} >Read More</Link></span> </p>
                                    <div className="tag-footer">
                                    {
                                    c.tech_name1 == null? null: <span class="tag tag-purple">{c.tech_name1}</span>
                                    }
                                    {
                                    c.tech_name2 == null? null: <span class="tag tag-yellow">{c.tech_name2}</span>
                                    }
                                    {
                                    c.tech_name3 == null? null: <span class="tag tag-green">{c.tech_name3}</span>
                                    }
                                    </div>
                                </div>
                            </div>
                        )})}
                        </div>

                        <div className="view-more-btn-container">
                            <Link className="view-more-btn" href={'/blogs'}>View More</Link>
                        </div>
                    </div>


                <Container>
                    <h1 className='sec-title'>Courses</h1>
                    <Row>
                        {course.map((c,i) =>{
                            return (
                                <Col xs={12} md={6} lg={4} className='my-3'>
                                <Card>
                                    <Card.Img variant="top" src={c.image} />
                                    <Card.Body>
                                        <Card.Title className='text-dark text-center'>{c.title}</Card.Title>
                                        <Card.Text className='text-center'>                                            
                                            <Badge pill bg="danger">
                                            Total Class {c.total_class}
                                            </Badge>{' '}
                                            <Badge pill bg="success">
                                            Duration {c.duration}
                                            </Badge>{' '}
                                        </Card.Text>
                                        <div className='text-center'>
                                        <a className='btn btn-warning' href={c.course_detail_link} target='_blank'>View Details</a>
                                        </div>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}

                    </Row>
                </Container>

                <div className="latest-blog">
                    <h1 className='sec-title'>Latest Notes</h1>
                    <div class="latest-notes-container">
                    {notes.map((c,i) =>{
                        return(
                        <div class="notes-card">
                        <div class="card__header">
                            <Image src={c.image} alt="card__image" class="card__image" width="1080" height="250" />
                        </div>
                        <div class="card__body">
                            <h4 className='card-title'>{c.title}</h4>

                            <p className='card-detail' ><span  dangerouslySetInnerHTML={{__html: c.description.slice(0, 200)}}></span>... <span><Link className='readmore-btn' href={`/notes/${c.id}`} >Read More</Link></span> </p>
                            <div className="tag-footer">
                            {
                            c.tech_name1 == null? null: <span class="tag tag-purple">{c.tech_name1}</span>
                            }
                            {
                            c.tech_name2 == null? null: <span class="tag tag-green">{c.tech_name2}</span>
                            }
                            {
                            c.tech_name3 == null? null: <span class="tag tag-yellow">{c.tech_name3}</span>
                            }
                            </div>
                        </div>
                        </div>
                        )
                        })}
                    </div>
                    <div className="view-more-btn-container">
                            <Link className="view-more-btn" href={'/notes'}>View More</Link>
                        </div>

                </div>

                <div className="books-section">
                    <h1 className="books-section-title">Books</h1>
                    <div className="books-container">
                        <div className="book-card book-one">
                            <div className="book-header">
                                <Image src="/book1.webp" alt="book_image" class="book_image" width="400" height="400" />
                            </div>
                            <div className="book-body">
                                <h4 className="book-title">Amusing Graphic Design Handbook</h4>
                                <p className="book-detail">Amusing Graphic Design Handbook Arfius Al-din Arfius Al-din on Amazon.com. *FREE* shipping on qualifying offers</p>
                                <div className="buy-now-btn-wraper">
                                    <Link className='buy-now-btn' href={'https://www.amazon.com/Amusing-Graphic-Design-Handbook-Arfius/dp/B09J7Q64SQ/ref=sr_1_1?qid=1676026361&refinements=p_27%3AArfius+Al-din&s=books&sr=1-1'} target="_blank">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="book-card">
                            <div className="book-header">
                                <Image src="/inspiring-book.jpg" alt="book_image" class="book_image" width="400" height="400" />
                            </div>
                            <div className="book-body">
                                <h4 className="book-title">Amusing Graphic Design Handbook</h4>
                                <p className="book-detail">Amusing Graphic Design Handbook Arfius Al-din Arfius Al-din on Amazon.com. *FREE* shipping on qualifying offers</p>
                                <div className="buy-now-btn-wraper">
                                    <Link className='buy-now-btn' href={'https://www.amazon.com/Inspiring-Delightful-Mandala-Design-Arfius-Al-din/dp/B09HR59VSM/ref=sr_1_2?qid=1676026361&refinements=p_27%3AArfius+Al-din&s=books&sr=1-2'} target="_blank">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-section">
                    <h1 className='news-section-title'>News & Update</h1>
                    <div class="news-container">
                    {news.map((c,i) =>{
                        return(
                            <div class="news-card">
                            <div class="news_header">
                                <Image src={c.image} alt="news_image" class="news_image" width="400" height="250" />
                            </div>
                            <div class="news_body">
                                <h5 className='news-date'>{c.date}</h5>
                                <h4 className='news-title'>{c.title}</h4>
                                <p className='news-detail'><span dangerouslySetInnerHTML={{__html: c.description.slice(0, 200)}}></span><span><Link className='readmore-btn'href={`/news/${c.id}`}>Read More</Link></span> </p>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                    <div className="text-center">
                            <Link className="btn btn-light" href={'/news'}>View More</Link>
                    </div>
                </div>
                <footer>
                    <Link href={'/contact'} className="talk-btn">Let's Talk</Link>
                    <div className="footer-middle">
                        <div className="social-media">
                            <div className="nav-side">
                                <div className="about mb-20">
                                    <h2>About</h2>
                                    <li><Link className='nav-link' href={'/education'}>Education</Link></li>
                                    <li className='footer-text'><Link className='nav-link' href={'/news'}>Press and News</Link></li>
                                    <li className='footer-text'><Link className='nav-link' href={'/privacypoicy'}>Privacy Policy</Link></li>
                                    <li className='footer-text'><Link className='nav-link' href={'/termsOfService'}>Terms of service</Link></li>
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
                    <div className="social-media-wraper">
                        <div className="social-media-icons">
                            <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                                <Link className="social-icon" href={'https://www.facebook.com/IamArfius'} target="_blank">
                                    <FaFacebookF />
                                </Link>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                                <Link className="social-icon" href={'https://www.instagram.com/arfiusaldin/'} target="_blank">
                                    <BsInstagram />
                                </Link>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                                <Link className="social-icon" href={'https://www.linkedin.com/in/arfiusaldin/'} target="_blank">
                                    <FiLinkedin />
                                </Link>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                                <Link className="social-icon" href={'https://www.youtube.com/@ArfiusAldin?sub_confirmation=1'} target="_blank">
                                    <BsYoutube />
                                </Link>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                                <Link className="social-icon" href={'https://twitter.com/arfiusaldin'} target="_blank">
                                    <BsTwitter />
                                </Link>
                            </IconContext.Provider>
                        </div>
                    </div><br /><br />
                    <div className="copyright">
                        <p>©2023 Arfius Super Technology ALL Rights Reserved</p>
                    </div>
                </footer>
            </main>
        </>
    )
}