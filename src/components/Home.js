import React, { useState } from 'react';
import './Home.css'

const Home = ({ name, image, job, home_info }) => {

    return (
        <section className="Home section" id="home">
            <div className="page-container" >
                <div className="img-container">
                    <img className='home-img' src={image} alt={name} />
                </div>
                <div className="info-container">
                    <h1>Hi! I'm {name}</h1>
                    <h2>{job}</h2>
                    <p>
                        {home_info}
                    </p>
                    <div className="buttons-container">
                        <a
                            href="your-cv-download-link.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-button"
                        >
                            Download CV
                        </a>
                        <a href="/contact" className="home-button">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Home;
