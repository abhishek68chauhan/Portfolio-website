import SectionTitle from "../components/SectionTitle";

function Experience() {
  return (
    <section className="section page-top">

      <div className="container">

        <SectionTitle
          eyebrow="EXPERIENCE"
          title="My professional journey."
        />

        <div className="experience-card">

          <span className="eyebrow">
            AUG 2026 — SEP 2026
          </span>

          <h2>
            Frontend Development Intern
          </h2>

          <h3>
            CodeAlpha
          </h3>

          <p>
            Worked on frontend development
            and responsive web interfaces,
            strengthening practical experience
            with modern web development.
          </p>

          <div className="tags">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Frontend Development</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;
