
import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
  Link,
  useParams,
} from "react-router-dom";

import api from "../api";

function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    api
      .get("/projects")
      .then((response) => {
        const found = response.data.find(
          (item) => String(item._id) === String(id)
        );

        console.log("Project:", found);

        setProject(found);
      })
      .catch((error) => {
        console.error(
          "Failed to fetch project:",
          error
        );
      });
  }, [id]);

  if (!project) {
    return (
      <section className="section page-top">
        <div className="container">
          <h2>Project not found.</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-top">
      <div className="container details">

        {/* Back */}
        <Link
          to="/projects"
          className="back-link"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        {/* Project Image */}
        <div className="details-image">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
            />
          ) : (
            <span>
              {project.title}
            </span>
          )}
        </div>

        {/* Heading */}
        <span className="eyebrow">
          PROJECT DETAILS
        </span>

        <h1>
          {project.title}
        </h1>

        {/* Description */}
        <p className="details-description">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="detail-block">
            <h2>Technologies Used</h2>

            <div className="tags">
              {project.technologies.map(
                (tech, index) => (
                  <span key={index}>
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {/* Features */}
        {project.features?.length > 0 && (
          <div className="detail-block">
            <h2>Key Features</h2>

            <ul className="feature-list">
              {project.features.map(
                (feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {/* Role */}
        {project.role && (
          <div className="detail-block">
            <h2>My Role</h2>

            <p>
              {project.role}
            </p>
          </div>
        )}

        {/* Duration */}
        {project.duration && (
          <div className="detail-block">
            <h2>Project Duration</h2>

            <p>
              {project.duration}
            </p>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && (
          <div className="detail-block">
            <h2>Challenges</h2>

            <p>
              {project.challenges}
            </p>
          </div>
        )}

        {/* Learning */}
        {project.learning && (
          <div className="detail-block">
            <h2>What I Learned</h2>

            <p>
              {project.learning}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="hero-buttons">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;