import '../styling/hero.css';

const Hero = () => {

    return (
        <section className="hero-section">
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
                    <p className="stack">
                        Java · Spring Boot · React · React Native · TypeScript · REST APIs
                    </p>

                    <p className='description'>Hello, I am Alexandros. A passionate, newly graduated, fullstack developer specializing in Java and modern frontend technologies. I craft clean, efficient and scalable applications, blending backend robustness with intuitive, responsive user interfaces. I enjoy turning complex problems into simple, elegant solutions and continuously learning new technologies along the way. When I am not coding, spending my time with my wife and two kids, while also researching how to improve my current works.</p>

                    <div className="actions">
                        <a href="#projects" className="btn cta">
                            View Projects
                        </a>
                        <a href="/resume.pdf" className="btn cta-outline" target="_blank" rel="noopener noreferrer">
                            Download CV
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Alekaz94" target="_blank" rel="noopener noreferrer" className="social">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/alexandros-kazalis-3b52a0257/" target="_blank" rel="noopener noreferrer" className="social">
                            LinkedIn
                        </a>
                        <a href="mailto:alexandros.kazalis@hotmail.com" className="social">
                            Email
                        </a>
                    </div>
                </div>
            </div>
            <div className="scroll-hint">
                ↓
            </div>
        </section>
    )
}

export default Hero;