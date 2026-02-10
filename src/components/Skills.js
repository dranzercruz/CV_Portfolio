import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiReact,
  SiSpringboot,
  SiAmazonaws,
  SiTensorflow,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiFlask,
} from "react-icons/si";
import { HiCode, HiChip, HiDatabase, HiCloud, HiBeaker, HiCog } from "react-icons/hi";
import data from "../data";

const skillIcons = {
  Java: HiCode,
  JavaScript: SiJavascript,
  SQL: SiMysql,
  Python: SiPython,
  "C++": SiCplusplus,
  "React.js": SiReact,
  "React Native": SiReact,
  "Spring Boot": SiSpringboot,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  "REST APIs": HiCode,
  GraphQL: SiGraphql,
  Git: SiGit,
  TensorFlow: SiTensorflow,
  Flask: SiFlask,
};

const categoryIcons = {
  languages: HiCode,
  frontend: SiReact,
  backend: SiSpringboot,
  databases: HiDatabase,
  cloudDevOps: HiCloud,
  mlAi: HiBeaker,
  tools: HiCog,
};

const categoryLabels = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  cloudDevOps: "Cloud / DevOps",
  mlAi: "ML / AI",
  tools: "Tools",
};

function SkillCard({ category, items }) {
  const IconCategory = categoryIcons[category];
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="skill-card__header">
        <IconCategory className="skill-card__icon" />
        <h3 className="skill-card__title">{categoryLabels[category]}</h3>
      </div>
      <div className="skill-card__items">
        {items.map((item) => {
          const Icon = skillIcons[item] || HiChip;
          return (
            <span key={item} className="skill-card__item">
              <Icon className="skill-card__item-icon" />
              {item}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="skills__grid">
          {Object.entries(data.skills).map(([key, items]) => (
            <SkillCard key={key} category={key} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
