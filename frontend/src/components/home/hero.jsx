import React from "react";
import './hero.css'
import porfile from '../../assets/port1.png'
import github from '../../assets/github.png'

function Hero(){
    // const values=["Frontend Developer","Fullstack Developer","Backend Developer"]
    const fullstack=document.getElementById("fullstack")
    console.log(fullstack)
    return(
        <div className="hero">
            <div className='hero-left'> 
                <h3>Hello It's <span>Me</span></h3>
                <h2>MEKIBIB ATLAW</h2>
                <h4>I am <span className="fullstack" id="fullstack">a Fullstack Developer</span></h4>
                <p>I am a fullstack developer from BahirDar,Ethiopia with zero year experience.
                    I have a skill to create frontend website ,and backend development
                </p>
                <div className="hero-action">
                    <div className="hero-icon">
                        <img src={github} alt="" />
                        <img src={github} alt="" />
                        <img src={github} alt="" />
                        <img src={github} alt="" />
                    </div>
                    <div className="hero-button">
                        <button className="hired-me">Hired Me</button>
                        <button className="more-about-me">More About Me</button>
                    </div>
                </div>
            </div>    
            <div className='hero-right'>
                <img src={porfile} alt="" />
            </div>
        </div>
    )
}
export default Hero