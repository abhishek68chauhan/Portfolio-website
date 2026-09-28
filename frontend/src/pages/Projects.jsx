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
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
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
        ) : (

          <div className="projects-grid">

            {projects.map(
              (project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                />
              )
            )}

          </div>

        )}

      </div>

    </section>
  );
}

export default Projects;
