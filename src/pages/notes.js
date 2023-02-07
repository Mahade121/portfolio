import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '@/components/Navbar';

export default function Notes() {
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
  
  return (
    <div className='notes-container'>
      <Navbar></Navbar>
      <br /><br /><br /><br />
      <h1 className="section-title">All Notes</h1>
      <div className="notes-page-container">
        <div class="latest-notes-container">
          {notes.map((c,i) =>{
            return(
              <div class="notes-card">
              <div class="card__header">
                <Image src={c.image} alt="card__image" class="card__image" width="1080" height="250" />
              </div>
              <div class="card__body">
                <h4 className='card-title'>{c.title}</h4>

                <p className='card-detail' ><span  dangerouslySetInnerHTML={{__html: c.description.slice(0, 200)}}></span>... <span><Link className='readmore-btn' href='#'>Read More</Link></span> </p>
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
          <button class="view-more-btn" role="button">View More</button><br /><br /><br />
        </div>
      </div>
    </div>
  )
}
