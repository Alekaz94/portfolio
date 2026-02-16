import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "./project.css";
import Modal from "../Modal";

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const openModal = (title: string, content: React.ReactNode) => {
        setModalTitle(title);
        setModalContent(content);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModalTitle("");
        setModalContent(null);
    };

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    return (
        <section id="projects" className="project-section">
            <h2 className="project-heading">Projects</h2>

            <div className="project-grid">
                <ProjectCard 
                    title="Catholic Daily Companion – Mobile App (Frontend)" 
                    highlight="Live production app published on Google Play"
                    description="Production Android application built with React Native and Expo. Provides daily saints, common prayers, guided rosary prayers, and personal journaling, with a focus on clean UX and responsive mobile design."
                    tech={["React Native", "Expo", "TypeScript", "Git"]}
                    image="/cdc.png"
                    repoLink="https://github.com/Alekaz94/catholic-daily-companion-frontend" 
                    liveLink="https://play.google.com/store/apps/details?id=com.alexandros.catholicdailycompanion&hl=sv"
                    caseStudyLink={() => openModal("Catholic Daily Companion – Frontend Case Study", 
                        <>
                            <div className="frontend-hero">
                                <img src="/app_1.jpg" alt="App 1" className="app-screenshot"/>
                                <img src="/app_2.jpg" alt="App 2" className="app-screenshot"/>
                                <img src="/app_4.jpg" alt="App 3" className="app-screenshot"/>
                                <img src="/app_5.jpg" alt="App 3" className="app-screenshot"/>
                            </div>

                            <section>
                                <h3>Overview</h3>
                                <p>
                                    A React Native mobile app providing daily saints, prayers, and personal journaling. 
                                    Built for responsive design and smooth UX.
                                </p>
                            </section>

                            <section>
                                <h3>Key Challenges</h3>
                                <ul>
                                    <li>Designing a responsive and clean mobile interface</li>
                                    <li>Integrating multiple features while keeping UX intuitive</li>
                                    <li>Handling navigation and state management efficiently</li>
                                    <li>Implementing Google authentication with Firebase</li>
                                </ul>
                            </section>

                            <section>
                                <h3>Tech Stack</h3>
                                <p>React Native · Expo · TypeScript · Firebase Auth · Git</p>
                            </section>

                            <section>
                                <h3>Outcome</h3>
                                <p>This project strengthened my skills in mobile development, responsive design, and state management in React Native. I gained hands-on experience integrating dynamic content that updates daily for users, as well as Google authentication using Firebase.</p>
                                <p>Working on this app gave me practical insights into delivering a production-ready mobile application.</p>
                            </section>
                        </>
                    )}
                    />

                <ProjectCard 
                    title="Catholic Daily Companion – Mobile App (Backend)" 
                    description="RESTful backend built with Java and Spring Boot, responsible for handling Google authentication, data persistence with PostgreSQL and content delivery for a production mobile application."
                    tech={["Java", "Spring Boot", "PostgreSQL", "REST API", "Git"]}
                    repoLink="https://github.com/Alekaz94/catholic-daily-companion" 
                    caseStudyLink={() => openModal("Catholic Daily Companion – Backend Case Study",
                        <>
                            <section>
                                <h3>Overview</h3>
                                <p>
                                    Spring Boot backend powering a production mobile application, responsible for authentication, user management and API content delivery.
                                </p>
                            </section>

                            <section>
                                <h3>Authentication & Security</h3>
                                <ul>
                                    <li>Firebase authentication for Google Sign-In</li>
                                    <li>Backend verification of Firebase ID tokens</li>
                                    <li>JWT access tokens for API authorization</li>
                                    <li>Server-managed refresh tokens for session continuity</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3>Key Challenges</h3>
                                <ul>
                                    <li>Designing a secure refresh token lifecycle</li>
                                    <li>Handling token expiration and renewal edge cases</li>
                                </ul>
                            </section>

                            <section>
                                <h3>Tech Stack</h3>
                                <p>Java · Spring Boot · Firebase Auth · JWT · PostgreSQL · REST</p>
                            </section>

                            <section>
                                <h3>Outcome</h3>
                                <p>
                                    A stable, stateless backend supporting a live mobile application.                                </p>
                            </section>

                            <section>
                                <h3>Next Improvements</h3>
                                <ul>
                                    <li>Refresh token rotation and hashing</li>
                                    <li>Expanded authentication edge-case testing</li>
                                </ul>
                            </section>
                        </>
                    )}
                />

                <ProjectCard
                    title="Portfolio Website"
                    description="Personal portfolio built with React and styled with CSS showcasing my projects and skills."
                    tech={["React", "CSS", "Vite", "Git"]}
                    repoLink="https://github.com/Alekaz94/portfolio"
                    caseStudyLink={() => openModal("Portfolio Website Case Study", 
                        "This portfolio showcases my work with a simple, clean, and modern design. It was built using React and styled with CSS. The challenge was to create a responsive and dynamic layout that highlights my projects effectively.")}            
                />
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                title={modalTitle} 
                content={modalContent} 
            />
        </section>
    )
}

export default Projects;