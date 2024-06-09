import React, { useState, useEffect } from 'react';
import { db } from '../../../configuration/firebase';
import { collection, getDocs,getFirestore } from 'firebase/firestore';

function Practice() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsCollection = collection(db, 'projects');
                const projectSnapshot = await getDocs(projectsCollection);
                const projectsList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProjects(projectsList);
            } catch (error) {
                console.error("Error fetching projects: ", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Practice;
