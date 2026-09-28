import { skills } from "../data/profile";

import SectionTitle from "../components/SectionTitle";

function Skills() {
    return (
        <section className="section page-top">

            <div className="container">

                <SectionTitle
                    eyebrow="TECHNICAL SKILLS"
                    title="Technologies I work with."
                />

                <div className="skills-grid">

                    {Object.entries(skills).map(
                        ([category, items]) => (

                            <div
                                className="skill-card"
                                key={category}
                            >

                                <h3>
                                    {category}
                                </h3>

                                <div className="skill-list">

                                    {items.map(
                                        (skill) => (
                                            <span key={skill}>
                                                {skill}
                                            </span>
                                        )
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}

export default Skills;
