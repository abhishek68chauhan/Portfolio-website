import { useEffect, useState } from "react";

import api from "../api";

import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/projects")
      .then((response) => {
        const backendProjects = response.data || [];

        const myProjects = [
          {
            _id: "shop-project",
            title: "Shop Project",
            description:
              "A full-stack e-commerce web application built with React, Node.js, Express and MongoDB.",
            technologies: [
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Redux Toolkit",
            ],
            github:
              "https://github.com/abhishek68chauhan/shop-project",
            live:
              "https://shop-project-abhishek.vercel.app",
          },
          {
            _id: "apni-dukan",
            title: "Apni Dukan",
            description:
              "A modern e-commerce application built with React featuring dynamic routing, reusable components and responsive UI.",
            technologies: [
              "React",
              "JavaScript",
              "Redux Toolkit",
              "CSS",
            ],
            github:
              "https://github.com/abhishek68chauhan/Apnadukan",
            live:
              "https://shop-project-abhishek.vercel.app",
          },
          {
            _id: "pcm-streak",
            title: "PCM Streak",
            description:
              "A MERN-based study tracking platform for Physics, Chemistry and Mathematics with authentication, daily study tracking and practice questions.",
            technologies: [
              "MongoDB",
              "Express",
              "React",
              "Node.js",
            ],
            github:
              "https://github.com/abhishek68chauhan",
            live: "",
          },
        ];

        setProjects([...myProjects, ...backendProjects]);
      })
      .catch((error) => {
        console.log("Error fetching projects:", error);

        // Show projects even if backend is unavailable
        setProjects([
          {
            _id: "shop-project",
            title: "Shop Project",
            description:
              "A full-stack e-commerce web application built with React, Node.js, Express and MongoDB.",
            technologies: [
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Redux Toolkit",
            ],
            github:
              "https://github.com/abhishek68chauhan/shop-project",
            live:
              "https://shop-project-abhishek.vercel.app",
          },
          {
            _id: "apni-dukan",
            title: "Apni Dukan",
            description:
              "A modern e-commerce application built with React featuring dynamic routing, reusable components and responsive UI.",
            technologies: [
              "React",
              "JavaScript",
              "Redux Toolkit",
              "CSS",
            ],
            github:
              "https://github.com/abhishek68chauhan/Apnadukan",
            live:
              "https://shop-project-abhishek.vercel.app",
          },
          {
            _id: "pcm-streak",
            title: "PCM Streak",
            description:
              "A MERN-based study tracking platform for Physics, Chemistry and Mathematics with authentication, daily study tracking and practice questions.",
            technologies: [
              "MongoDB",
              "Express",
              "React",
              "Node.js",
            ],
            github:
              "https://github.com/abhishek68chauhan",
            live: "",
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="section page-top">
      <div className="container">

        <SectionTitle
          eyebrow="MY PROJECTS"
          title="Projects & applications."
          text="Explore my web development projects."
        />

        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
