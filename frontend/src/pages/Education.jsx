import { GraduationCap } from "lucide-react";

import { profile } from "../data/profile";

import SectionTitle from "../components/SectionTitle";

function Education() {
  return (
    <section className="section page-top">

      <div className="container">

        <SectionTitle
          eyebrow="EDUCATION"
          title="Academic background."
        />

        <div className="education-card">

          <div className="education-icon">
            <GraduationCap />
          </div>

          <div>

            <span className="eyebrow">
              B.TECH — COMPUTER SCIENCE
            </span>

            <h2>
              {profile.degree}
            </h2>

            <h3>
              {profile.university}
            </h3>

            <p>
              Computer Science and Engineering
              with focus on programming,
              databases, web development and
              software engineering.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;
