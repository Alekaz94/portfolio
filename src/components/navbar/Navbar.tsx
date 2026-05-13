import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="nav-content">
                <a href="#about" className="logo" onClick={closeMenu}>Alexandros Kazalis</a>

                <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
                    <button className="close-drawer" onClick={closeMenu} aria-label="Close menu">
                        ×
                    </button>
                
                    <ul className="nav-links">
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#tech" onClick={closeMenu}>Tech Stack</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                        <li><a href="/alexandros_kazalis_resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" download>Download CV</a></li>
                    </ul>
                </div>

                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
                    <span className="bar"/>
                    <span className="bar"/>
                    <span className="bar"/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;