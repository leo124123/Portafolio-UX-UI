import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Cpu, Layers, Code2 } from "lucide-react";
import "./Css/About.css";

export default function About() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* AVATAR */}
        <motion.div 
          className="about-visual"
          style={{ y: yImage }}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="about-glow"></div>
          <div className="about-frame">
           
             <img  src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif" width="90" height="90" alt="Coding" />
          </div>
        </motion.div>

        {/* PANEL */}
        <motion.div 
          className="about-panel"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <img src = "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/about_me.gif?raw=true" width="32" height="30" alt="About Me"/> ABOUT ME
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I'm in my final year of school. I've been studying web programming, especially frontend development, for about two years, and I'd like to continue improving my skills with time and experience.

          </motion.p>

          {/* FRASES */}
          <div className="about-lines">
            {[
              "I build systems, not just interfaces.",
              "Clean code. Intentional design.",
              "Technology as a tool. Creativity as the driving force."
            ].map((text, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.2 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.span>
            ))}
          </div>

          {/* STATS */}
          <div className="about-stats">
            <div><Cpu size={18}/> FrontEnd Developer</div>
            <div><Layers size={18}/> UI Engineer</div>
            <div><Code2 size={18}/> Creative Dev</div>
          </div>

          {/* EXPERIENCIA */}
          <motion.div 
            className="about-exp"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <span>✔ Modern architectures</span>
            <span>✔ Professional animations</span>
            <span>✔ Performance and scalability</span>
            <span>✔ Product-oriented design</span>
          </motion.div>

          {/* UBICACIÓN */}
          <div className="about-location">
            <MapPin size={18}/>
            <span>República Dominicana · Santo Domingo Este</span>
          </div>

          {/* BOTÓN */}
          <motion.a
           href="/cv/Leonardo Luis CV.pdf"
          className="about-btn"
              download="Leonardo Luis CV.pdf"
               whileHover={{ scale: 1.08 }}
             whileTap={{ scale: 0.95 }}
            >
              Descargar CV
        </motion.a>


        </motion.div>

      </div>

    </section>
  );
}
