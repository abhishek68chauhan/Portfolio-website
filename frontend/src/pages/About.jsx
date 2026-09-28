import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { profile } from "../data/profile";

import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section className="section page-top">

      <div className="container">

        <SectionTitle
          eyebrow="ABOUT ME"
          title="A developer who likes to build."
        />

        <div className="about-grid">

          <div className="about-photo">

            <img
              src={profile.photo}
              alt={profile.name}
            />

          </div>

          <div className="about-content">

            <h2>
              Hi, I'm {profile.name}
            </h2>

            <p>
              {profile.about}
            </p>

            <p>
              My focus is on full-stack development,
              APIs, databases, responsive interfaces,
              problem solving and deployment.
            </p>

            <div className="about-info">

              <div>
                <span>Degree</span>
                <strong>
                  {profile.degree}
                </strong>
              </div>

              <div>
                <span>University</span>
                <strong>
                  {profile.university}
                </strong>
              </div>

              <div>
                <span>Specialization</span>
                <strong>
                  MERN Stack
                </strong>
              </div>

            </div>

            <Link
              to="/contact"
              className="primary-button"
            >
              Let's Connect
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
