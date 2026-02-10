import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiExternalLink } from "react-icons/hi";
import data from "../data";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="project-card__header">
        <HiCode className="project-card__icon" />
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <span className="project-card__duration">{project.duration}</span>
        </div>
      </div>
      <p className="project-card__description">{project.description}</p>
      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-card__highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className="project-card__tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-card__tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.githubUrl}
        className="project-card__link"
        aria-label={`View ${project.title} on GitHub`}
      >
        GitHub (placeholder)
        <HiExternalLink />
      </a>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="projects__grid">
          {data.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
