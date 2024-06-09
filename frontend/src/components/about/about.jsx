import React, { useState } from "react";
import './about.css';
import aboutImg from '../../assets/port1.png';

function About() {
    const [about, setAbout] = useState(false);

    return (
        <div className="about">
            <div className="aboutSection">
                <div className="aboutLeft">
                    <img src={aboutImg} alt="About Me" />
                </div>
                <div className="aboutRight">
                    <h1 className="aboutTitle">About Me</h1>
                    <div className="about-para">
                        <p>I am a junior fullstack developer and mobile app developer with professional expertise in the field.
                            Throughout my career, I have had the privilege of
                            collaborating with prestigious companies, contributing to their success and growth.</p>
                        <p>I am passionate about programming and web development.
                            My problem-solving skills have matured through years of coding experience. 
                            I am proficient in HTML, CSS, JavaScript, React, React Native, and Node.js. My passion for 
                            fullstack development and mobile app development is not only reflected in my extensive experience 
                            but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <p className="par">skills</p>
                        <div className="about-skill"><p>HTML & CSS</p></div>
                        <div className="about-skill"><p>Bootstrap</p></div>
                        <div className="about-skill"><p>React Native</p></div>
                        <div className="about-skill"><p>React JS</p></div>
                        <div className="about-skill"><p>JavaScript</p></div>
                        <div className="about-skill"><p>Node JS</p></div>
                        <div className="about-skill"><p>MySQL, MongoDB</p></div>
                        <div className="about-skill"><p>Git and Github</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
