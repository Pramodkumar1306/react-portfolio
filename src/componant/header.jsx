import React, { useState } from 'react'
import './header.css'
import { IoLogoLinkedin } from "react-icons/io"
import { FaGithub, FaInstagram } from "react-icons/fa6"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"

const contactData = [
    {
        id: 1,
        title: 'Email:',
        value: 'pramod@example.com',
        icon: MdEmail
    },
    {
        id: 2,
        title: 'Contact Me:',
        value: '734940****',
        icon: MdPhone
    }
]

const socialIcons = [
    {
        id: 1,
        icon: IoLogoLinkedin,
        link: 'https://linkedin.com'
    },
    {
        id: 2,
        icon: FaGithub,
        link: 'https://github.com'
    },
    {
        id: 3,
        icon: FaInstagram,
        link: 'https://instagram.com'
    }
]

export default function header() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`outer-cont ${isExpanded ? 'expanded' : ''}`}>
            <button 
                className="corner-button" 
                onClick={() => setIsExpanded(!isExpanded)}
            >
                Show Contact
            </button>
            
            <div className="content-header">
                <div className="profile-box"></div>
                <div className="header-text">
                    <h1>Pramod Kumar</h1>
                    <h5>Web Developer</h5>
                </div>
            </div>

            <div className={`content ${isExpanded ? 'visible' : ''}`}>
                <hr className="divider" />
            </div>

            <div className="diver-cont">
                <div className="contact-row">
                    {contactData.map(item => (
                        <div key={item.id} className="contact-item">
                            <div className="detail-row">
                                <div className="profile-box-icon">
                                    <item.icon className="contact-detail-icon" />
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="contact-row">
                    <div className="contact-item">
                        <div className="detail-row">
                            <div className="profile-box-icon">
                                <MdLocationOn className="contact-detail-icon" />
                            </div>
                            <div>
                                <h4>Address:</h4>
                                <p>Banglore</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="divider" />
                
                <div className="social-icons">
                    {socialIcons.map(({ id, icon: Icon, link }) => (
                        <a key={id} href={link} target="_blank" rel="noopener noreferrer">
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

