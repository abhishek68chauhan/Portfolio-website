import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="section page-top">
      <div className="container">

        <SectionTitle
          eyebrow="MY PROJECTS"
          title="Projects & applications."
          text="Explore my web development projects."
        />

        {projects.length === 0 ? (
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
