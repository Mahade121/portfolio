import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '@/components/Navbar';

export default function books() {
    const [blog,setBlog] = useState([]);

    const getBlog =()=>{
        axios.get('http://127.0.0.1:8000/blog/').then((response) =>{
            const myData = response.data;
            setBlog(myData)
        })
    };
    useEffect(()=> getBlog(), []);

    return (
        <>
            <div className="book-section">
                <Navbar></Navbar>
                <br /><br /><br /><br />
                <h1 className="section-title">All Blogs</h1><br />
                <div className="latest-blog-page">
                    <div class="latest-blog-container-page">
                        {blog.map((c,i) =>{
                            return(
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
                            )
                        })}

                        <div className="view-more-btn-container">
          <button class="view-more-btn" role="button">View More</button>
        </div><br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </>
    )
}
