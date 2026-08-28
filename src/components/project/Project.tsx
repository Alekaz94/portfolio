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
                    title="Catholic Daily Companion - React Native Frontend" 
                    description="Production mobile application built with React Native and Expo, featuring daily saints, prayers, guided rosary sessions, and personal journaling with a focus on responsive UI and smooth user experience."
                    tech={["React Native", "Expo", "TypeScript", "Git"]}
                    image="/cdc.png"
                    repoLink="https://github.com/Alekaz94/catholic-daily-companion-frontend" 
                    caseStudyLink={() => openModal("Catholic Daily Companion – Frontend Case Study", 
                        <>
                            <div className="frontend-hero">
                                <div className="slider">
                                    <img src="/app_1.jpg" alt="App 1" className="app-screenshot"/>
                                    <img src="/app_2.jpg" alt="App 2" className="app-screenshot"/>
                                    <img src="/app_4.jpg" alt="App 3" className="app-screenshot"/>
                                    <img src="/app_5.jpg" alt="App 3" className="app-screenshot"/>
                                </div>
                            </div>

                            <section>
                                <h3>Overview</h3>
                                <p>
                                    A production-ready React Native application designed to provide daily Catholic content, guided prayers, and personal journaling in a clean and accessible mobile experience.
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
                                <p>This project gave me hands-on experience building and maintaining a production mobile application, including authentication flows, state management, responsive UI design, and API integration.</p>
                            </section>
                        </>
                    )}
                    />

                <ProjectCard 
                    title="Catholic Daily Companion — Spring Boot Backend" 
                    description="RESTful backend built with Java and Spring Boot, handling authentication, PostgreSQL data persistence, and API delivery for a production mobile application."
                    tech={["Java", "Spring Boot", "PostgreSQL", "REST API", "Git"]}
                    repoLink="https://github.com/Alekaz94/catholic-daily-companion" 
                    caseStudyLink={() => openModal("Catholic Daily Companion – Backend Case Study",
                        <>
                            <section>
                                <h3>Overview</h3>
                                <p>
                                    Spring Boot backend powering a production mobile application, responsible for authentication, user management, PostgreSQL persistence, and REST API delivery.
                                </p>
                            </section>

                            <section>
                                <h3>Authentication & Security</h3>
                                <ul>
                                    <li>Firebase authentication for Google Sign-In</li>
                                    <li>Backend verification of Firebase ID tokens</li>
                                    <li>JWT access tokens for API authorization</li>
                                    <li>Server-managed refresh token handling  for session continuity</li>
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
                                    A stable, stateless backend supporting a live production mobile application with secure authentication and scalable API architecture.                                
                                </p>
                            </section>

                            <section>
                                <h3>Next Improvements</h3>
                                <ul>
                                    <li>Refresh token rotation and hashing</li>
                                    <li>Expanded authentication edge case testing</li>
                                </ul>
                            </section>
                        </>
                    )}
                />

                <ProjectCard
                    title="Portfolio Website"
                    description="Responsive portfolio website built with React and TypeScript to showcase projects, technical skills, and case studies."
                    tech={["React", "CSS", "Vite", "Git"]}
                    repoLink="https://github.com/Alekaz94/portfolio"
                    caseStudyLink={() => openModal("Portfolio Website Case Study", 
                        <>
                            <section>
                                <h3>Overview</h3>
                                <p>
                                    This portfolio was built to showcase my projects, technical skills, and development experience through a clean, responsive, and accessible interface.
                                </p>
                            </section>
                        </>
                    )}            
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