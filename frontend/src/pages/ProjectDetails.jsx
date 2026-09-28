
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

  const [project, setProject] =
    useState(null);

  useEffect(() => {
    api
      .get("/projects")
      .then((response) => {
        const found =
          response.data.find(
            (item) => item._id === id
          );

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

        <Link
          to="/projects"
          className="back-link"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

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

        <span className="eyebrow">
          PROJECT DETAILS
        </span>

        <h1>
          {project.title}
        </h1>

        <p className="details-description">
          {project.description}
        </p>

        <div className="tags">

          {project.technologies?.map(
            (tech) => (
              <span key={tech}>
                {tech}
              </span>
            )
          )}

        </div>

        <div className="hero-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

        </div>

      </div>

    </section>
  );
}

export default ProjectDetails;
