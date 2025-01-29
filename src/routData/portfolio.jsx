import React, { useState } from 'react'
import './portfolio.css'

const projects = {
    all: [
        {
            title: "E-Commerce Website",
            description: "Online platform for medals and trophies",
            tech: "HTML, CSS, JavaScript, Java, SQL",
            category: "web"
        },
        {
            title: "IOT Door Lock",
            description: "RFID and KeyPad based door lock system",
            tech: "Arduino, Java",
            category: "component"
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website",
            tech: "React, CSS, JavaScript",
            category: "web"
        },
        {
            title: "Smart Home System",
            description: "IoT based home automation",
            tech: "Arduino, Python",
            category: "component"
        }
    ]
};

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all' 
        ? projects.all 
        : projects.all.filter(project => project.category === activeFilter);

    return (
        <div>
            <div className="about-container">
                <h1 className="about-title">Portfolio</h1>
            </div>

            <div className="portfolio-nav">
                <button 
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                >
                    All
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'component' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('component')}
                >
                    Component
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('web')}
                >
                    Web Projects
                </button>
            </div>

            <div className="portfolio-content">
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                <strong>Tech Stack:</strong> {project.tech}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
