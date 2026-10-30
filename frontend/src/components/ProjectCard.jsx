import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {

  const projectImages = {
    "Shop Project": "/projectshop.png",
    "Apni Dukan": "/apnidukan.png",
    "PCM Streak": "/pcmstreak.png",
  };

  const imageSrc =
    projectImages[project.title] || "/default-project.png";

  return (
    <div className="project-card">

      <div className="project-image">
        <img
          src={imageSrc}
          alt={project.title}
          onError={(e) => {
            e.currentTarget.src = "/default-project.png";
          }}
        />
      </div>

      <div className="project-content">

        <small>FULL STACK PROJECT</small>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tags">
          {project.technologies?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">

          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub size={17} />
            GitHub
          </a>

          <a href={project.live} target="_blank" rel="noreferrer">
            <ExternalLink size={17} />
            Live
          </a>

          <Link to={`/projects/${project._id}`}>
            Details
          </Link>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;