import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import data from "../data";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (no backend). Your message: " + formData.message);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className="contact__wrapper">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href={`mailto:eniyavanthirumaran@gmail.com`}
              className="contact__link"
              aria-label="Email"
            >
              <HiMail />
              <span>{data.email}</span>
            </a>
            <a
              href={`https://github.com/dranzercruz`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>github.com/{data.github}</span>
              <HiExternalLink className="contact__external" />
            </a>
            <a
              href={`https://www.linkedin.com/in/eniyavanthirumaran/`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>linkedin.com/in/{data.linkedin}</span>
              <HiExternalLink className="contact__external" />
            </a>
          </motion.div>
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
