import Link from 'next/link';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function contact() {
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
      <div className="contact-section">
        <header>
          <div className="logo">
            <h1>Arfius Al-din</h1>
          </div>
          <nav>
            <ul>
              <li><Link className='nav-link' href={'/home'}>Home</Link></li>
              <li><Link className='nav-link' href={'/stories'}>Stories</Link></li>
              <li><Link className='nav-link' href={'/notes'}>Notes</Link></li>
              <li><Link className='nav-link' href={'/books'}>Books</Link></li>
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
        </header>
        <br /><br />
        <div className="contact-form-section">
          <div className="contact-form-container">
            <h1 className='contactUs-title'>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Name' className='contact-inp'/><br />
              <input type="email" name='email' placeholder='Your Email' className='contact-inp' /><br />
              <input type="text" name='phone' placeholder='Your Phone' className='contact-inp' /><br />
              <textarea name="message" className='contact-inp' placeholder='Message' id="" cols="30" rows="10"></textarea><br /><br />
              <input type="submit" value="Send" className='send-btn' />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
