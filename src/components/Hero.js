import React from "react";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import data from "../data";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero__name">{data.name}</h1>
          <h2 className="hero__title">{data.title}</h2>
          <p className="hero__tagline">{data.tagline}</p>
          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn--primary">
              <HiArrowDown className="btn__icon" />
              View Projects
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/E20099_Eni.pdf`}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <HiDownload className="btn__icon" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero__image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt={data.name}
            className="hero__image"
          />
        </motion.div>
      </div>
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href="#about" aria-label="Scroll to About">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
