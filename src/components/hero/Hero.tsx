import './hero.css';
import { FaGithub, FaLinkedin, FaEnvelopeOpen, FaDownload } from "react-icons/fa";

const Hero = () => {

    return (
        <section id='about' className="hero-section">
            <div className="hero-bg"></div>
            <div className="content">
                <img
                    className="avatar"
                    src="/profile.jpg"
                    alt="Alexandros Kazalis"
                />
                <div className="text">
                    <h1 className="title">Alexandros Kazalis</h1>
                    <p className='subtitle'>Fullstack Developer</p>

                    <p className="description">
                        Hello, I am Alexandros, a fullstack developer specializing in Java and Spring Boot, with experience building modern frontends using React and React Native.
                        <br /><br />
                        I enjoy turning complex problems into simple, well structured solutions, with a strong focus on backend development, RESTful APIs, and clean application architecture.
                        <br /><br />
                        As a recent graduate, I am actively seeking a junior fullstack role where I can learn from experienced developers, grow within a team, and contribute to real world applications.
                        Outside of coding, I enjoy spending time with my family and continuously improving my projects and technical skills.
                    </p>
                    
                    <p className="stack">
                        Core focus: Java · Spring Boot · REST APIs · PostgreSQL · React · React Native
                    </p>

                    <div className="actions">
                        <a href="#projects" className="btn cta">
                            View Projects
                        </a>
                        <a href="/alexandros_kazalis_resume.pdf" className="btn cta-outline" target="_blank" rel="noopener noreferrer" download>
                            <FaDownload /> Download CV
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Alekaz94" target="_blank" rel="noopener noreferrer" className="social">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/alexandros-kazalis-3b52a0257/" target="_blank" rel="noopener noreferrer" className="social">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="mailto:alexandros.kazalis@hotmail.com" className="social" aria-label="Email Alexandros Kazalis">
                            <FaEnvelopeOpen size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;