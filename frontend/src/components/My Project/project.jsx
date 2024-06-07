import React from "react";
import pro from '../../assets/pro1.png'
import './project.css'
import arrowIcon from '../../assets/menu.png'
import githubIcon from '../../assets/github.png'
function Project(){
    
    return(
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects-container">
                <div className="project">
                    <img src={pro} alt="" />
                    <div className="project-text">
                        <h2>Weather APP</h2>
                        <p>This weather app it used to know the current weather conditon in different region </p>
                        <div className="button">
                            <button className="Demo">Live Demo</button>
                            <button className="github"><img src={githubIcon} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={pro} alt="" />
                    <div className="project-text">
                        <h2>Weather APP</h2>
                        <p>This weather app it used to know the current weather conditon in different region </p>
                        <div className="button">
                            <button className="Demo">Live Demo</button>
                            <button className="github"><img src={githubIcon} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={pro} alt="" />
                    <div className="project-text">
                        <h2>Weather APP</h2>
                        <p>This weather app it used to know the current weather conditon in different region </p>
                        <div className="button">
                            <button className="Demo">Live Demo</button>
                            <button className="github"><img src={githubIcon} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={pro} alt="" />
                    <div className="project-text">
                        <h2>Weather APP</h2>
                        <p>This weather app it used to know the current weather conditon in different region </p>
                        <div className="button">
                            <button className="Demo">Live Demo</button>
                            <button className="github"><img src={githubIcon} alt="" /></button>
                        </div>
                    </div>
                </div>
                <button className="show-more">show more</button>
            </div> 
        </div>
    )
}
export default Project