import Link from 'next/link';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';

export default function Notes() {
  const [notes, setNote] = useState([])
  const getNote = () =>{
    
  }
  return (
    <div className='notes-container'>
      <header>
        <div className="logo">
          <h1>Arfius Al-din</h1>
        </div>
        <nav>
          <ul>
            <li><Link className='nav-link' href={'/home'}>Home</Link></li>
            <li><Link className='nav-link' href={'/stories'}>Stories</Link></li>
            <li><Link className='nav-link' href={'/notes'}>Notes</Link></li>
            <li><Link className='nav-link' href={'/books'}>Blogs</Link></li>
            <li><Link className='nav-link' href={'/news'}>News</Link></li>
            <li><Link className='nav-link' href={'/contact'}>Contact</Link></li>
            <div className="dropdown-container">
              
            </div>
          </ul>
        </nav>
        <div className='search-input'>
          <input type="text" placeholder='search here...' className='search' />
        </div>
      </header><br /><br /><br /><br />
      <h1 className="section-title">All Notes</h1>
      <div className="notes-page-container">
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
          <button class="view-more-btn" role="button">View More</button><br /><br /><br />
        </div>
      </div>
    </div>
  )
}
