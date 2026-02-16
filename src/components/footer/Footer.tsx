import "./footer.css";

const Footer = () => (
    <footer className="footer">
        <p>
            © {new Date().getFullYear()} Alexandros Kazalis · <a href="mailto:alexandros.kazalis@hotmail.com" aria-label="Email Alexandros Kazalis"> Get in touch</a>
        </p>
    </footer>
);

export default Footer;