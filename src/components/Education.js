import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import data from "../data";

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="education__grid">
          {data.education.map((item, index) => (
            <motion.div
              key={item.institution}
              className="education__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <HiAcademicCap className="education__icon" />
              <h3 className="education__institution">{item.institution}</h3>
              <p className="education__degree">{item.degree}</p>
              <p className="education__details">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
