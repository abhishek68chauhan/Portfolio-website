import {
FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

import { profile } from "../data/profile";

function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      url: profile.social.github,
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: profile.social.linkedin,
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      url: profile.social.instagram,
      icon: <FaInstagram />,
    },
    {
      name: "Facebook",
      url: profile.social.facebook,
      icon: <FaFacebook />,
    },
    {
      name: "Email",
      url: `mailto:${profile.email}`,
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className="social-links">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name === "Email" ? undefined : "_blank"}
          rel={link.name === "Email" ? undefined : "noreferrer"}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;

