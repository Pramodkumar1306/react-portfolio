import React, { useState } from 'react'
import './App.css'
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";


export default function App() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`outer-cont ${isExpanded ? 'expanded' : ''}`}>
            <button className="corner-button" onClick={toggleExpand}>
                Show Contact
            </button>
            <div className="content-header">
                <div className="profile-box"></div>
                <div className="header-text">
                    <h1>Pramod Kumar</h1>
                    <div>
                        <h5>Web Developer</h5>
                    </div>
                </div>
            </div>
            <div className={`content ${isExpanded ? 'visible' : ''}`}>
                <hr className="divider" />
            </div>
                <div className="diver-cont">
                <div className="contact-row">
                    <div className="contact-item">
                        <span className=''> </span>
                        <h4>Contact Me:</h4>
                        <p>7349407415</p>
                    </div>
                    <div className="contact-item">
                        <h4>Email:</h4>
                        <p>pramod@example.com</p>
                    </div>
                </div>
                <h4>Address:</h4>
                <p>Banglore</p>
                <hr className="divider" />
                <div className="social-icons">
                    <a href=""><BiLogoGmail /> </a>
                    <a href=""><FaGithub /> </a>
                    <a href=""><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

