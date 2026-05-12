import "./techStack.css";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiCss3,
  SiReact,
  SiTypescript, 
  SiDocker
} from "react-icons/si";

const TechStack = () => {

    return (
        <section id="tech" className="skill-section">
            <h2 className="skill-heading">Tech Stack</h2>
            <div className="skill-grid">
                <div className="skill-card">
                    <h3>Backend</h3>

                    <div className="tech-items">
                        <div className="tech-item">
                            <FaJava className="icon java" />
                            <span>Java</span>
                        </div>

                        <div className="tech-item">
                            <SiSpringboot className="icon spring" />
                            <span>Spring Boot</span>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Frontend</h3>

                    <div className="tech-items">
                        <div className="tech-item">
                            <FaReact className="icon react" />
                            <span>React</span>
                        </div>

                        <div className="tech-item">
                            <SiReact className="icon react-native" />
                            <span>React Native</span>
                        </div>

                        <div className="tech-item">
                            <SiJavascript className="icon js" />
                            <span>JavaScript</span>
                        </div>

                        <div className="tech-item">
                            <SiTypescript className="icon ts" />
                            <span>TypeScript</span>
                        </div>

                        <div className="tech-item">
                            <SiCss3 className="icon css" />
                            <span>CSS</span>
                        </div>

                        <div className="tech-item">
                            <FaHtml5 className="icon html" />
                            <span>HTML</span>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Database</h3>

                    <div className="tech-items">
                        <div className="tech-item">
                            <SiPostgresql className="icon postgres" />
                            <span>PostgreSQL</span>
                        </div>

                        <div className="tech-item">
                            <SiMysql className="icon mysql" />
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Tools</h3>

                    <div className="tech-items">
                        <div className="tech-item">
                            <FaGitAlt className="icon git" />
                            <span>Git</span>
                        </div>

                        <div className="tech-item">
                            <FaGithub className="icon github" />
                            <span>GitHub</span>
                        </div>

                        <div className="tech-item">
                            <SiDocker className="icon docker" />
                            <span>Docker (Learning)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack;