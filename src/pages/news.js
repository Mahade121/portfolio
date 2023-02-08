import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import axios from 'axios';


export default function news() {
    const [news,setNews] = useState([]);

    const getNews =()=>{
        axios.get('http://127.0.0.1:8000/news/').then((response) =>{
            const myData = response.data;
            setNews(myData)
        })
    };
    useEffect(()=> getNews(), []);

    return (
        <div className='news-page'>
            <Navbar></Navbar>
            <br /><br /><br /><br />
            <br />
            <h1 className="section-title">All News</h1>
            <br /><br />
            <div className="news-section">
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
                                <p className='news-detail'><span dangerouslySetInnerHTML={{__html: c.description.slice(0, 200)}}></span><span><Link className='readmore-btn' href='#'>Read More</Link></span> </p>
                            </div>
                        </div>
                        )
                    })}

                </div>
                <div className="news-view-more-btn-container">
                    <button class="news-view-more-btn" role="button">View More</button>
                </div>
            </div>
        </div>
    )
}
