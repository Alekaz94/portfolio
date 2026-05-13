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
                    <p className='subtitle'>Junior Fullstack Developer · Java & Spring Boot</p>

                    <p className="description">
                        Fullstack developer specializing in Java and Spring Boot, with experience building modern web and mobile applications using React and React Native.
                        <br /><br />
                        Passionate about backend development, RESTful APIs, and designing clean, maintainable application architectures.
                        <br /><br />
                        Currently seeking a junior backend, frontend, or fullstack role where I can contribute to production systems, collaborate with experienced developers, and continue growing as an engineer.            
                    </p>
                    <p className="stack">
                        Java · Spring Boot · REST APIs · PostgreSQL · React · React Native · TypeScript
                    </p>

                    <div className="actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="/alexandros_kazalis_resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" download>
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