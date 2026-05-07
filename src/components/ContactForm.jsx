import { useState } from "react";
import Section from "./Section";
import { profile } from "../data/profile";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvyvkpg";
const socialIcons = {
  LinkedIn: linkedinIcon,
  GitHub: githubIcon
};

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please complete all fields." });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus({ type: "success", message: "Message sent successfully." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Could not send message. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact" title="Contact">
      <div className="panel">
        <p>Open to cloud engineering roles, freelance, and technical collaborations.</p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="social-links">
          {profile.socialLinks.map((link) => {
            const iconSrc = socialIcons[link.label];
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="social-icon-link"
              >
                {iconSrc ? (
                  <img src={iconSrc} alt={link.label} className="social-icon" />
                ) : (
                  <span>{link.label}</span>
                )}
              </a>
            );
          })}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status.message ? <p className={`form-${status.type}`}>{status.message}</p> : null}
        </form>
      </div>
    </Section>
  );
}

export default ContactForm;
