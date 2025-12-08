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
            <a href="#" className="logo" onClick={closeMenu}>Alexandros Kazalis</a>

            <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
                <button className="close-drawer" onClick={closeMenu} aria-label="Close menu">
                    ×
                </button>
            
                <ul className="nav-links">
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a></li>
                </ul>
            </div>

            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span className="bar"/>
                <span className="bar"/>
                <span className="bar"/>
            </button>
        </nav>
    )
}

export default Navbar;