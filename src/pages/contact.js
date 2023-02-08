import Link from 'next/link';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Router from 'next/router'

export default function contact() {
  const[name,namechange]=useState("");
  const[email,emailchange]=useState("");
  const[phone,phonechange]=useState("");
  const[message,messagechange]=useState("");
  const[validation,valchange]=useState(false);


  // const navigate=useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    const empdata={name,email,phone,message};
    

    fetch("http://127.0.0.1:8000/contact",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(empdata)
    }).then((res)=>{
      alert('Saved successfully.')
      Router.push('/home')
    }).catch((err)=>{
      console.log(err.message)
    })

  }

  return (
    <>
      <div className="contact-section">
        <Navbar></Navbar>
        <br /><br /><br />
        <div className="contact-form-section">
          <div className="contact-form-container">
            <h1 className='contactUs-title'>Contact Us</h1>
            <form onSubmit={handlesubmit}>
              <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} placeholder='Your Name' className='contact-inp'/><br />
              <input  required value={email} onMouseDown={e=>valchange(true)} onChange={e=>emailchange(e.target.value)} placeholder='Your Email' className='contact-inp' /><br />
              <input  required value={phone} onMouseDown={e=>valchange(true)} onChange={e=>phonechange(e.target.value)} placeholder='Your Phone' className='contact-inp' /><br />
              <textarea  required value={message} onMouseDown={e=>valchange(true)} onChange={e=>messagechange(e.target.value)} className='contact-inp' placeholder='Message' id="" cols="20" rows="5"></textarea><br /><br />
              <input type="submit" value="Send" className='send-btn' />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
