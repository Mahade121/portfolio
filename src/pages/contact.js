import Link from 'next/link';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';

export default function contact() {
  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mwtmw4u', 'template_qkrxbsw', form.current, 'JXgEjXdmo7cxAcJIR')
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
        <Navbar></Navbar>
        <br /><br /><br />
        <div className="contact-form-section">
          <div className="contact-form-container">
            <h1 className='contactUs-title'>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Name' className='contact-inp'/><br />
              <input type="email" name='email' placeholder='Your Email' className='contact-inp' /><br />
              <input type="text" name='phone' placeholder='Your Phone' className='contact-inp' /><br />
              <textarea name="message" className='contact-inp' placeholder='Message' id="" cols="20" rows="5"></textarea><br /><br />
              <input type="submit" value="Send" className='send-btn' />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
