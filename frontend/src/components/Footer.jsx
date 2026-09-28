import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-about">

          <h2>{profile.name}</h2>

          <h4>
            {profile.role} | {profile.subtitle}
          </h4>

          <p>
            {profile.bio}
          </p>

          <SocialLinks />

        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/education">Education</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Projects</h3>

          <Link to="/projects">
            Shop Project
          </Link>

          <Link to="/projects">
            Apni Dukan
          </Link>

          <Link to="/projects">
            PCM Streak
          </Link>
        </div>

        <div>
          <h3>Connect</h3>

          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={profile.social.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href={profile.social.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

          <a href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom container">

        <p>
          {/* © {new Date().getFullYear()} {profile.name} */}
          www.abhishekchauhan.com
        </p>

        <p>
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
