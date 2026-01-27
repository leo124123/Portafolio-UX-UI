import { motion, useScroll, useTransform } from "framer-motion"; 
import TypeText from "../Bits/TypeText";
import { User, Github, Linkedin, Mail } from "lucide-react";
import "./Css/Hero.css";

export default function Hero() {

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // ✅ NUEVO → controla cuándo desaparece el scroll
  const scrollOpacity = useTransform(scrollY, [0, 250], [1, 0]);

  return (
    <section id="home" className="hero">

      <motion.div className="hero-container" style={{ y, opacity }}>

        {/* IZQUIERDA */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.span
            className="hero-mini"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            WELCOME TO MY PORTFOLIO
          </motion.span>

          <h1 className="hero-title">
            Hello, I am{" "}
            <span>
              <TypeText text="Leonardo" />
            </span>
          </h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Front-End Developer & Creative Designer. I build modern and professional web experiences.
          </motion.p>

          <motion.div className="hero-icons">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/leo124123"
              target="_blank"
              className="hero-icon"
            >
              <Github size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/TU_USUARIO"
              target="_blank"
              className="hero-icon"
            >
              <Linkedin size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:leonardoluisdelacruz01@gmail.com"
              target="_blank"
              className="hero-icon"
            >
              <Mail size={22} />
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            {/* ✅ SOLO SE AGREGÓ href */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="hero-btn primary"
            >
              See projects
            </motion.a>

            {/* ✅ SOLO SE AGREGÓ href */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-btn secondary"
            >
              <User size={18} style={{ marginRight: "8px" }} />
              Contact me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* DERECHA */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <motion.div
            className="hero-avatar"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img className="img" src="/src/assets/Leo.jpg" alt="Tu foto" />
            <span className="ring r1"></span>
            <span className="ring r2"></span>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* ✅ SCROLL (desaparece al salir del Hero) */}
      <motion.div
        className="hero-scroll"
        style={{ opacity: scrollOpacity }}
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        SCROLL ↓
      </motion.div>

    </section>
  );
}
