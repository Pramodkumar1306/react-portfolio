import React, { useState } from 'react'
import './portfolio.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = {
    all: [
        {
            title: "SQL Join Visualization",
            description: "An interactive React component that helps students better understand SQL JOIN concepts through visual representation. This educational tool demonstrates different types of SQL joins (INNER, LEFT, RIGHT, FULL) with clear examples and interactive elements.",
            tech: "React, CSS, JavaScript",
            category: "component",
            link: "https://comfy-sable-0cd59b.netlify.app/"
        },
        {
            title: "Selection Sort Visualization",
            description: "I developed a React component that showcases the Selection Sort algorithm with interactive visualization. It highlights the selection process step by step, making it easy to understand.",
            tech: "React, CSS, JavaScript",
            category: "component",
            link: "https://selection-sort-ten.vercel.app/"
        },
        {
            title: "OOP's Project",
            description: "This project is a comprehensive demonstration of Object-Oriented Programming (OOP) principles, covering all four pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism. It is developed in Java, utilizing classes, objects, and real-world scenarios to showcase OOP concepts effectively.",
            tech: "React , CSS, JavaScript, tailwindcss",
            category: "component",
            link: "https://oop-s-pramods-projects-79bc2cd2.vercel.app/"
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
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    <strong>Tech Stack:</strong> {project.tech}
                                </div>
                                {project.link && (
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-project-btn"
                                    >
                                        <span>View Project</span>
                                        <FaExternalLinkAlt className="link-icon" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
