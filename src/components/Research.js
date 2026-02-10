import React from "react";
import { motion } from "framer-motion";
import { HiBeaker } from "react-icons/hi";
import data from "../data";

function Research() {
  const { research } = data;
  return (
    <section id="research" className="section research">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Research
        </motion.h2>
        <motion.div
          className="research__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HiBeaker className="research__icon" />
          <h3 className="research__title">{research.title}</h3>
          <div className="research__meta">
            <span className="research__label">Focus:</span>
            <span>{research.focus}</span>
          </div>
          <div className="research__meta">
            <span className="research__label">Techniques:</span>
            <span>{research.techniques.join(", ")}</span>
          </div>
          <div className="research__tech">
            <span className="research__label">Technologies:</span>
            <div className="research__tech-tags">
              {research.technologies.map((tech) => (
                <span key={tech} className="research__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Research;
