import React from 'react'
import './mainHead.css'
import { Outlet, NavLink } from 'react-router-dom'

const navItems = [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" }
]

export default function MainHeader() {
    return (
        <div className="out">
            <div className='box'>
                <nav className='bar'>
                    <div className="nav-links">
                        {navItems.map(({ path, label }) => (
                            <NavLink 
                                key={path}
                                to={path} 
                                className="nav-item"
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}
