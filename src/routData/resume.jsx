import React from 'react'
import './resume.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const education = [
    {
        degree: "MCA (VTU)",
        school: "Jain college Of Engineering, Belagavi",
        year: "2024"
    },
    {
        degree: "BCA (RCU)",
        school: "Gogte College Of Commerce",
        year: "2021"
    },
    {
        degree: "PU-Science (RCU)",
        school: "Angadi College Of Commerce",
        year: "2018"
    },
    {
        degree: "SSLE (CBSC)",
        school: "Kendriya Vidyalaya No-2 Belgavi",
        year: "2016"
    }
];

const skills = {
    technical: ["HTML", "CSS", "JavaScript", "React", "Java (Beginner)", "SQL (Beginner)", "JDBC"],
    tools: ["VS Code", "Eclipse", "Netbeans", "Bootstrap", "Arduino"],
    languages: ["English", "Hindi", "Kannada"],
    soft: ["Problem-solving", "Analytics skills", "Team Work"]
};

const projects = [
    {
        title: "E-Commerce Website",
        description: "Through this concept, customers can purchase medals and trophies online, as well as ID cards for kids by using their personal information.",
        tech: "HTML, CSS, JavaScript, Java, SQL"
    },
    {
        title: "IOT Based Project",
        description: "With using RFID and KeyPad user can open door, using Arduino software",
        tech: "Java"
    }
];
//downloading the resume
export default function Resume() {
    const handleDownload = () => {
        // Replace this URL with your actual resume PDF URL
        const resumeUrl = "/pramod_kumar_resume.pdf";
        
        // Create a link element
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'pramod_kumar_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="about-container">
                <h1 className="about-title">Resume</h1>
                <button onClick={handleDownload} className="download-btn">
                    Download Resume
                </button>
            </div>

            <div className="resume-content">
                <section className="resume-section">
                    <h2>Objective</h2>
                    <p className="objective">
                        I'm looking for a web development position where I can help create creative, 
                        approachable web solutions and hone my technical abilities.
                    </p>
                </section>

                <section className="resume-section">
                    <h2>Education</h2>
                    <div className="education-list">
                        {education.map((edu, index) => (
                            <div key={index} className="education-item">
                                <h3>{edu.degree}</h3>
                                <p>{edu.school}</p>
                                <span className="year">{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Technical Skills</h3>
                            <ul>
                                {skills.technical.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Tools & Technologies</h3>
                            <ul>
                                {skills.tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Languages</h3>
                            <ul>
                                {skills.languages.map((lang, index) => (
                                    <li key={index}>{lang}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Soft Skills</h3>
                            <ul>
                                {skills.soft.map((soft, index) => (
                                    <li key={index}>{soft}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Projects</h2>
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <div key={index} className="project-item">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    <strong>Tech Stack:</strong> {project.tech}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Connect</h2>
                    <div className="social-links">
                        <a href="https://github.com/Pramodkumar1306" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/pramod-kumar-a7a97a223" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
