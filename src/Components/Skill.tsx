import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Css/Skill.css";

import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiMysql,
  SiAstro,
  SiExpress
} from "react-icons/si";

/* ===== TIPO ===== */
type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
  level: number;
};

/* ===== DATA ===== */
const skills: Skill[] = [
  { name: "JS", icon: SiJavascript, color: "#f7df1e", level: 85 },
  { name: "TS", icon: SiTypescript, color: "#3178c6", level: 65 },
  { name: "HTML", icon: SiHtml5, color: "#e34f26", level: 90 },
  { name: "CSS", icon: SiCss3, color: "#1572b6", level: 88 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8", level: 85 },
  { name: "React", icon: SiReact, color: "#61dafb", level: 85 },
  { name: "Vue", icon: SiVuedotjs, color: "#42b883", level: 65 },
  { name: "Node", icon: SiNodedotjs, color: "#3c873a", level: 65 },
  { name: "Git", icon: SiGit, color: "#f05032", level: 75 },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 80 },
  { name: "MySQL", icon: SiMysql, color: "#4479a1", level: 50 },
  { name: "Astro", icon: SiAstro, color: "#ff5d01", level: 70 },
  { name: "Express", icon: SiExpress, color: "#ffffff", level: 30 }
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="skills-section">

      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        SKILLS
        <span>(click a key)</span>
      </motion.h2>

      <motion.div
        className="keyboard"
        initial={{ opacity: 0, y: 120, rotateX: 45 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 28 }}
        transition={{ duration: 1.3 }}
      >
        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={i}
              className="keycap"
              whileHover={{ y: -25, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setActiveSkill(
                  activeSkill?.name === skill.name ? null : skill
                )
              }
            >
              <div className="key-top">
                <Icon size={28} style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ===== BARRA DE NIVEL ===== */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            className="skill-bar-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <div className="skill-bar-header">
              <span>{activeSkill.name}</span>
              <span>{activeSkill.level}%</span>
            </div>

            <div className="skill-bar-bg">
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${activeSkill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ background: activeSkill.color }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
