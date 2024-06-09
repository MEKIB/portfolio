import React, { useState } from "react";
import './services.css';

function Services() {
    const [showMoref, setShowMoref] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMoref(!showMoref);
    };
   const toggleShowMoreb =()=>{
    setShowMore(!showMore)
   }
    return (
        <section className="services" id="services">
            <div className="servicecontainer">
                <h1>My Services</h1>
                <div className="serviceList">
                    <div>
                        <h2>Frontend Development</h2>
                        <p>
                        Frontend web development refers to the process of creating the 
                        user interface and user experience of a website or web application. It typically focuses on the client-side of web applications, meaning the code, files, 
                        and assets that are downloaded and run in the user's browser.
                        </p>
                        {showMoref && (
                                <p>Key aspects of frontend web development include:html,css ,javascript,bootstrap,react etc</p>
                        )}
                        <button onClick={toggleShowMore}>{showMoref?"hidden":"show more"}</button>
                    </div>

                    <div>
                        <h2>Backend Development</h2>
                        <p>
                         Backend development refers to the server-side of web development,
                         which focuses on building and maintaining the behind-the-scenes 
                         functionality of websites or web applications.It deals with the server-side logic, databases, authentication, and other 
                         server-side operations that enable the frontend to function properly.
                        </p>
                        {showMore && (
                                <p>Key aspects of backend development include:Server-Side Programming Languages,
                                    Database Management,APIs(Application Programming Interfaces),Authentication and Authorization
                                    ,Server Configuration and Deployment,Security</p>
                        )}
                        <button onClick={toggleShowMoreb}>{showMore?"hidden":"show more"}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
