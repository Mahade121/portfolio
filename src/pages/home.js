import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function home() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <div className="absolute">
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
                            value={{ color: 'black', size: '17px', marginTop: '5px' }}>
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
                <div className="hero-sec">
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
                            <button className='hero-btn'>Know More</button>
                            <button className='hero-btn'>Read Blogs</button>
                        </div>
                    </div>
                    <div className="top-img">
                        <Image src={'/Arfius-vai.png'} width={700} height={500} />
                    </div>
                </div>
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
        </div>
        </>
    )
}

