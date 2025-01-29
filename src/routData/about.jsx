import React from 'react'
import './about.css'

const aboutCards = [
    {
        title: "Fast Learner",
        description: "Quick to grasp new technologies and concepts in web development"
    },
    {
        title: "Team Player",
        description: "Collaborate effectively with others to achieve project goals"
    },
    {
        title: "Problem Solver",
        description: "Analytical approach to solving technical challenges"
    },
    {
        title: "Creative Thinker",
        description: "Innovative solutions for complex development problems"
    },
    {
        title: "Detail Oriented",
        description: "Meticulous attention to code quality and best practices"
    },
    {
        title: "Adaptable",
        description: "Flexible in learning and implementing new technologies"
    }
];

export default function About() {
    return (
        <div>
            <div className="about-container">
                <h1 className="about-title">About</h1>
            </div>

            <div className="about-content">
                <div className="cards-scroll">
                    <div className="cards-container">
                        {aboutCards.map((card, index) => (
                            <div key={index} className="about-card">
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
