import {
  Download,
  ExternalLink,
} from "lucide-react";

import { profile } from "../data/profile";

function Resume() {
  return (
    <section className="section page-top">

      <div className="container resume-page">

        <span className="eyebrow">
          RESUME
        </span>

        <h1>
          My professional resume.
        </h1>

        <p>
          View or download my latest
          professional resume.
        </p>

        <div className="hero-buttons">

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <ExternalLink size={18} />
            View Resume
          </a>

          <a
            href={profile.resume}
            download
            className="secondary-button"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;
