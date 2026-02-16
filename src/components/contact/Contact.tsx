import "./contact.css";
import { FaGithub, FaLinkedin, FaEnvelopeOpen, FaDownload } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="title">Contact</h2>
            <p className="text">
                Interested in collaborating or have a question about my projects? <br />
                I am open to junior full-stack roles.
            </p>
            <br />
            <p className="text">
                Based in Stockholm, Sweden
            </p>

            <div className="contact-links">
               <a href="https://github.com/Alekaz94" target="_blank" rel="noopener noreferrer" className="contact-button"><FaGithub /> Github</a>
               <a href="https://www.linkedin.com/in/alexandros-kazalis-3b52a0257/" target="_blank" rel="noopener noreferrer" className="contact-button"><FaLinkedin /> LinkedIn</a>
               <a href="mailto:alexandros.kazalis@hotmail.com" aria-label="Email Alexandros Kazalis" className="contact-button"><FaEnvelopeOpen /> Email</a>
               <a href="/alexandros_kazalis_resume.pdf" download className="contact-button"><FaDownload /> Download CV</a>
            </div>
        </section>
    )
}

export default Contact