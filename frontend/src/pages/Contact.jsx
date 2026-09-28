import { useState } from "react";

import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { profile } from "../data/profile";

import SocialLinks from "../components/SocialLinks";
import SectionTitle from "../components/SectionTitle";

import api from "../api";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] =
    useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("Sending...");

    try {

      const response =
        await api.post(
          "/contact",
          form
        );

      setStatus(
        response.data.message
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      setStatus(
        "Failed to send message."
      );

    }

  };

  return (
    <section className="section page-top">

      <div className="container">

        <SectionTitle
          eyebrow="CONTACT"
          title="Let's build something useful."
          text="Have an opportunity or collaboration in mind? Send me a message."
        />

        <div className="contact-grid">

          <div className="contact-info">

            <div className="contact-item">

              <Mail />

              <div>
                <span>Email</span>

                <a
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </div>

            </div>

            <div className="contact-item">

              <MapPin />

              <div>
                <span>Location</span>

                <strong>
                  {profile.location}
                </strong>
              </div>

            </div>

            <SocialLinks />

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <label>
              Name

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

            </label>


            <label>
              Email

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </label>


            <label>
              Message

              <textarea
                name="message"
                rows="7"
                value={form.message}
                onChange={handleChange}
                required
              />

            </label>


            <button
              className="primary-button"
              type="submit"
            >
              <Send size={18} />
              Send Message
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;
