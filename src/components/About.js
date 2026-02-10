import React from "react";
import { motion } from "framer-motion";
import data from "../data";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="about__text">{data.about}</p>
          <div className="about__highlights">
            <span className="about__highlight">full-stack</span>
            <span className="about__highlight">AWS</span>
            <span className="about__highlight">problem-solving</span>
            <span className="about__highlight">real-world systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
