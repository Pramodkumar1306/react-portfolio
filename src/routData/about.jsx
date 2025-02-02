import React from 'react'
import './about.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiOracle } from 'react-icons/si'
// /import profilePhoto from '../assets/photo.jpg';
  // Add this at the top with other imports
const aboutCards = [
    {
        title: "Fast Learner",
        description: "Quick to grasp new technologies and concepts in web development",
        icon: "🚀"
    },
    {
        title: "Team Player",
        description: "Collaborate effectively with others to achieve project goals",
        icon: "👥"
    },
    {
        title: "Problem Solver",
        description: "Analytical approach to solving technical challenges",
        icon: "💡"
    },
    {
        title: "Creative Thinker",
        description: "Innovative solutions for complex development problems",
        icon: "🎨"
    },
    {
        title: "Detail Oriented",
        description: "Meticulous attention to code quality and best practices",
        icon: "🎯"
    },
    {
        title: "Adaptable",
        description: "Flexible in learning and implementing new technologies",
        icon: "🔄"
    }
];

const technologies = [
    {
        name: "HTML5",
        icon: <FaHtml5 />,
        color: "#E34F26"
    },
    {
        name: "CSS3",
        icon: <FaCss3Alt />,
        color: "#1572B6"
    },
    {
        name: "JavaScript",
        icon: <FaJs />,
        color: "#F7DF1E"
    },
    {
        name: "React",
        icon: <FaReact />,
        color: "#61DAFB"
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        color: "#7952B3"
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "#38B2AC"
    },
    {
        name: "Java",
        icon: <FaJava />,
        color: "#007396"
    },
    {
        name: "JDBC",
        icon: <SiOracle />,
        color: "#F80000"
    }
];

export default function About() {
    return (
        <div className="about-wrapper">
            <div className="about-container">
                <h1 className="about-title">About</h1>
            </div>

            <div className="intro-section">
                {/* <div className="profile-section">
                    <div className="profile-image-container">
                    <img 
                            src={profilePhoto}
                            alt="Pramod Kumar" 
                            className="profile-image" 
                        />
                        <div className="image-overlay"></div>
                    </div>
                </div> */}

                <div className="intro-text">
                    <h2>Hi, I'm <span className="highlight">Pramod</span> 👋</h2>
                    <p>A passionate full-stack developer with expertise in React, Java, Spring Boot, and SQL. I specialize in building dynamic, responsive, and visually appealing web applications that deliver seamless user experiences.</p>
                </div>

                <div className="expertise-section">
                    <h3>My Expertise</h3>
                    <div className="expertise-list">
                        <div className="expertise-item">
                            <span className="expertise-icon">⚛️</span>
                            <p>Frontend: React, JavaScript, HTML, CSS, Tailwind</p>
                        </div>
                        <div className="expertise-item">
                            <span className="expertise-icon">⚙️</span>
                            <p>Backend: Java, Spring Boot, JDBC, REST APIs</p>
                        </div>
                        <div className="expertise-item">
                            <span className="expertise-icon">🗄️</span>
                            <p>Database: SQL, MySQL</p>
                        </div>
                        <div className="expertise-item">
                            <span className="expertise-icon">🔄</span>
                            <p>Version Control & Deployment: Git, GitHub</p>
                        </div>
                        
                    </div>
                </div>

                <div className="philosophy-section">
                    <p>💡 I believe in continuous learning, problem-solving, and writing clean, maintainable code. Whether it's developing web applications, integrating APIs, or optimizing performance, I love turning ideas into reality.</p>
                    <p className="connect-text">🚀 Let's connect and build something amazing together!</p>
                </div>
            </div>

            <div className="about-content">
                <h2 className="section-title">What I Bring to the Table</h2>
                <div className="cards-scroll">
                    <div className="cards-container">
                        {aboutCards.map((card, index) => (
                            <div key={index} className="about-card">
                                <div className="card-icon">{card.icon}</div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="tech-section">
                <h2 className="section-title">Technologies I Work With</h2>
                <div className="tech-scroll">
                    <div className="tech-container">
                        {technologies.map((tech, index) => (
                            <div 
                                key={index} 
                                className="tech-card"
                                style={{ "--tech-color": tech.color }}
                            >
                                <div className="tech-icon">
                                    {tech.icon}
                                </div>
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
