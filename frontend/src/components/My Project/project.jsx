import React, { useEffect, useState } from "react";
import pro from '../../assets/pro1.png'
import './project.css'
import arrowIcon from '../../assets/menu.png'
import githubIcon from '../../assets/github.png'
import { db } from "../../../configuration/firebase";
import { collection } from "firebase/firestore";
const PAGE_SIZE=4;
function Project(){
    const[projects,setProjects]=useState([])
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        const fetchProjects=async()=>{
            const projectsCollection=collection(db,'projects')
            const projectSnaphot=await getDocs(projectsCollection)
            const projectList=projectSnaphot.docs.map(doc=>({
                id:doc.id,...doc.data()
            }))
            setProjects(projectList);
            setVisibleProjects(projectList.slice(0, PAGE_SIZE));
            setLoaded(true);
        }
        fetchProjects()
    },[])

    const showMoreProjects = () => {
        const newPage = page + 1;
        const newVisibleProjects = projects.slice(0, newPage * PAGE_SIZE);
        setVisibleProjects(newVisibleProjects);
        setPage(newPage);
    };
    return(
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects-container">
                {loaded ? visibleProjects.map(project => (
                    <div className="project" key={project.id}>
                        <img src={project.image || pro} alt={project.title} />
                        <div className="project-text">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="button">
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                    <button className="Demo">Live Demo</button>
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <button className="github"><img src={githubIcon} alt="GitHub" /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                )) : <p>Loading...</p>}

                {visibleProjects.length < projects.length && (
                    <button className="show-more" onClick={showMoreProjects}>Show More</button>
                )}
            </div> 
        </div>
    )
}
export default Project