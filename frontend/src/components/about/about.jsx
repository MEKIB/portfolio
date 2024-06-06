import React, { useState } from "react";
import './about.css'
import aboutImg from '../../assets/port1.png'
function About(){
    const[about,setAbout]=useState(false)
    return(
        <div className="about">
            <div className="aboutSection">
                <div className="aboutLeft">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="aboutRight">
                    <h1 className="aboutTitle">About Me</h1>
                    <div className="about-para">
                        <p>I am junior fullstack developer with over 1 year professional 
                            expertize in the field.Throughout my carrer,i have hod the privilege of collaborating
                            with presigious,contributing to their success and growth</p>
                        <p>I passionate about programming and web development.My problem-solving skills have matured through
                        years of coding expericene.Proficient in HTML,CSS,JAVASCRIPT,REACT,NODE JS. My passion for fullstack development is not only reflected in my extensive expericene but also in 
                        the enthusian and dedication I bring to each project. </p>
                    </div>
                    <div className="buttonItems">
                        <p onClick={()=>setAbout(!about)}>Skill</p>
                        <p onClick={()=>setAbout(!about)}>Experience</p>
                    </div>
                    {about?
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p></div>
                        <div className="about-skill"> <p>Bootstrap</p></div>
                        <div className="about-skill"> <p>Taliwind CSS</p></div>
                        <div className="about-skill"><p>React JS</p></div>
                        <div className="about-skill"><p>JavaScript</p></div>
                        <div className="about-skill"><p>Node JS</p></div>
                        <div className="about-skill"><p>MYSQL,MONGO DATABASE</p></div>
                </div>:null}
                </div>
            </div>
        </div>
    )
}
export default About