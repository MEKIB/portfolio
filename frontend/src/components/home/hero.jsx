import React, { useEffect, useState, useRef } from "react";
import './hero.css';
import profile from '../../assets/port1.png';
import { Link } from 'react-router-dom';

function Hero() {
    const values = ["Frontend Developer", "Fullstack Developer", "Backend Developer", "Mobile App Developer"];
    const [currentValue, setCurrentValue] = useState(values[0]);
    const fullstackRef = useRef(null);
    let valueIndex = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            valueIndex.current = (valueIndex.current + 1) % values.length;
            setCurrentValue(values[valueIndex.current]);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [values]);

    return (
        <div className="hero">
            <div className='hero-left'>
                <h3>Hello, It's <span>Me</span></h3>
                <h2>MEKIBIB ATLAW</h2>
                <h4>I am a <span className="fullstack" ref={fullstackRef}>{currentValue}</span></h4>
                <p>I am a fullstack developer from BahirDar, Ethiopia.
                    I have the skills to create frontend websites, backend development, and also mobile app development using React Native.
                </p>
                <div className="hero-action">
                    <div className="hero-button">
                        <a href="/cv.pdf" download>
                            <button className="download_cv">Download CV</button>
                        </a>
                        <Link to="/contact">
                            <button className="more-about-me">Contact Me</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='hero-right'>
                <img src={profile} alt="Profile" />
            </div>
        </div>
    );
}

export default Hero;
