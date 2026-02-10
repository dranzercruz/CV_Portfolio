import React from "react";
import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import data from "../data";

function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        <motion.ul
          className="certifications__list"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {data.certifications.map((cert, index) => (
            <motion.li
              key={cert}
              className="certifications__item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              <HiBadgeCheck className="certifications__icon" />
              <span>{cert}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Certifications;
