import "./projectCard.css"

type Props = {
    title: string;
    description: string;
    tech: string[];
    image?: string;
    repoLink?: string;
    liveLink?: string;
    highlight?: string;
    caseStudyLink?: () => void; 
}

const ProjectCard = ({ title, description, tech, image, repoLink, liveLink, highlight, caseStudyLink }: Props) => {

    return (
        <section className="project-card">
            {image && (
                <img src={image} alt={title} className="project-card-image" />
            )}            
            <div className="project-card-body">
                <h3 className="project-card-title">{title}</h3>

                {highlight && (
                    <p className="project-highlight">
                        {highlight}
                    </p>
                )}

                <p className="project-card-description">{description}</p>

                <div className="project-tech">
                    {tech.map((item, index: number) => (
                        <span key={index} className="tech-badge">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="project-actions">
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn cta google-play">
                            Google Play
                        </a>
                    )}
                    {repoLink && (
                        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn cta-outline">
                            GitHub
                        </a>
                    )}
                    {caseStudyLink && (
                        <button onClick={caseStudyLink} className="btn cta-outline case-study">Case Study</button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProjectCard;