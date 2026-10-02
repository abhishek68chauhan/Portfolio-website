import {
  ArrowRight,
  Download,
  MapPin,
  Code2,
} from "lucide-react";

import { Link } from "react-router-dom";

import { profile } from "../data/profile";

import SocialLinks from "../components/SocialLinks";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

function Home() {
  return (
    <>

      <section className="hero">

        <div className="container hero-grid">

          <div className="hero-content">

            <div className="available">
              <span></span>
              Available for opportunities
            </div>

            <span className="eyebrow">
              SOFTWARE DEVELOPER
            </span>

            <h1>
              Hi, I'm{" "}
              <strong>
                {profile.name}
              </strong>

              <br />

              <span>
                {profile.subtitle}
              </span>
            </h1>

            <p>
              {profile.bio}
            </p>

            <div className="hero-buttons">

              <Link
                to="/projects"
                className="primary-button"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>

              <a
                href={profile.resume}
                download
                className="secondary-button"
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>

            <SocialLinks />

            <div className="hero-info">

              <span>
                <MapPin size={16} />
                {profile.location}
              </span>

              <span>
                <Code2 size={16} />
                MERN Stack
              </span>

            </div>

          </div>

          <div className="hero-photo">

            <div className="photo-frame">

              <img
                src={profile.photo}
                alt={profile.name}
              />

            </div>

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="SELECTED WORK"
            title="Projects that show what I build."
            text="Some of my practical web development projects."
          />

          <div className="projects-grid">

            {projects.slice(0, 3).map(
              (project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                />
              )
            )}

          </div>

          <div className="center">

            <Link
              to="/projects"
              className="text-button"
            >
              View All Projects
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;
