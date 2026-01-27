import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import "./Css/Projects.css";

/* =======================
   TYPES
======================= */

type Project = {
  type: "project";
  title: string;
  desc: string;
  image: string;
  demo: string;
  github: string;
  details: string;
  gallery: string[];
  technologies: string[];
};

type Certificate = {
  type: "certificate";
  title: string;
  desc: string;
  image: string;
};

type Item = Project | Certificate;

/* =======================
   DATA
======================= */

const projects: Project[] = [
  {
    type: "project",
    title: "Weather App",
    desc: "Web weather application developed with React + Vite that consumes the OpenWeather API.",
    image: "/src/assets/Img/Weather-1.png",
    demo: "https://weather-app-create-a-real-time-weather-app-wgp7-gj2o25mf1.vercel.app",
    github: "https://github.com/leo124123/-Weather-App---Create-a-Real-Time-Weather-App.git",
    details: "#",
    gallery: [
      "/src/assets/Img/Weather-1.png",
      "/src/assets/Img/Weather-2.png",
    ],
    technologies: ["React", "JS", "CSS", "API"],
  },
  {
    type: "project",
    title: "Yira Gourmet",
    desc: "Landing Page About Gourmet.",
    image: "/src/assets/Img/Gourmet-1.png",
    demo: "#",
    github: "https://github.com/leo124123/Yira-s-Gourmet.git",
    details: "#",
    gallery: [
      "/src/assets/Img/Gourmet-1.png",
      "/src/assets/Img/Gourtmet-2.png",
      "/src/assets/Img/Gourtmet-4.png",
      "/src/assets/Img/Gourmet-7.png",
      "/src/assets/Img/Gourmet-8.png",
      "/src/assets/Img/Gourmet-9.png"
    ],
    technologies: ["REACT", "CSS", "JavaScript"],
  },
  {
    type: "project",
    title: "Eduvisor",
    desc: "The Ministry of Education's web platform allows educational technicians to register school visits with photographs, reports, and deadlines, eliminating manual processes.",
    image: "/src/assets/Img/Eduvisor-1.png",
    demo: "#",
    github: "https://github.com/samiluffy26/EduVisor.git",
    details: "#",
    gallery: [
      "/src/assets/Img/Eduvisor-2.jpeg",
      "/src/assets/Img/Eduvisor-3.jpeg",
      "/src/assets/Img/Eduvisor-4.jpeg",
      "/src/assets/Img/Eduvisor-5.jpeg",
    ],
    technologies: ["Node.js", "MoonDB", "Mongoose", "JWT", "Express", "HTML", "CSS"],
  },
  {
    type: "project",
    title: "Music player",
    desc: "It's a music player.",
    image: "/src/assets/Img/Reproductor.png",
    demo: "https://music-player-74efyh79p-leonardos-projects-bf2523bd.vercel.app",
    github: "https://github.com/leo124123/Music-player.git",
    details: "#",
    gallery: [
      "/src/assets/Img/Reproductor.png",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    type: "project",
    title: "Netflix",
    desc: "Page Netflix.",
    image: "/src/assets/Img/Netflix.png",
    demo: "#",
    github: "https://github.com/leo124123/Project-Netflix.git",
    details: "#",
    gallery: [
      "/src/assets/Img/Netflix.png",
      "/src/assets/Img/Netflix-2.png",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    type: "project",
    title: "Yira Gourmet",
    desc: "Landing Page About Gourmet.",
    image: "/src/assets/Img/Gourmet-1.png",
    demo: "https://music-player-4y4k4la6u-leonardos-projects-bf2523bd.vercel.app",
    github: "https://github.com/leo124123/Yira-s-Gourmet.git",
    details: "#",
    gallery: [
      "/src/assets/Img/Gourtmet-2.png",
      "/src/assets/Img/Gourtmet-3.png",
      "/src/assets/Img/Gourmet-7.png",
      "/src/assets/Img/Gourmet-8.png",
      "/src/assets/Img/Gourmet-9.png"
    ],
    technologies: ["REACT", "CSS", "JavaScript"],
  },
];


const certificates: Certificate[] = [
  {
    type: "certificate",
    title: "Frontend Developer",
    desc: "Frontend professional certification.",
    image: "/src/assets/Cert/Cert.png",
  },
 
];

/* =======================
   COMPONENT
======================= */

export default function Portfolio() {
  const [tab, setTab] = useState<"projects" | "certificates">("projects");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCertificate, setActiveCertificate] =
    useState<Certificate | null>(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const items: Item[] = tab === "projects" ? projects : certificates;

  return (
    <section ref={sectionRef} className="portfolio-section" id="projects">
      <motion.h2
        className="portfolio-title"
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8 }}
      >
         Projects
        <span>Projects & Certifications</span>
      </motion.h2>

      <motion.div className="portfolio-counters" style={{ y: yParallax }}>
        <Counter label="Projects" value={projects.length} />
        <Counter label="Certificates" value={certificates.length} />
      </motion.div>

      <div className="portfolio-tabs">
        <button
          className={tab === "projects" ? "active" : ""}
          onClick={() => setTab("projects")}
        >
          Projects
        </button>
        <button
          className={tab === "certificates" ? "active" : ""}
          onClick={() => setTab("certificates")}
        >
          Certificates
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="portfolio-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
        >
          {items.map((item, i) => (
            <Card
              key={i}
              item={item}
              index={i}
              onClick={() =>
                item.type === "project"
                  ? setActiveProject(item)
                  : setActiveCertificate(item)
              }
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
        {activeCertificate && (
          <CertificateModal
            certificate={activeCertificate}
            onClose={() => setActiveCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* =======================
   COUNTER
======================= */

function Counter({ value, label }: { value: number; label: string }) {
  return (
    <div className="counter">
      <span>{value}</span>
      <p>{label}</p>
    </div>
  );
}

/* =======================
   CARD
======================= */

function Card({
  item,
  index,
  onClick,
}: {
  item: Item;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const imageY = useTransform(rotateX, [-15, 15], [20, -20]);
  const contentY = useTransform(rotateX, [-15, 15], [10, -10]);
  const glareX = useTransform(rotateY, [-15, 15], ["20%", "80%"]);
  const glareY = useTransform(rotateX, [-15, 15], ["20%", "80%"]);

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    rotateY.set((e.clientX - r.left - r.width / 2) / 12);
    rotateX.set(-(e.clientY - r.top - r.height / 2) / 12);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="portfolio-card"
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      style={{ rotateX, rotateY }}
    >
      <motion.div
        className="card-glare"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,.35), transparent 60%)`,
        }}
      />

      <motion.div className="card-image" style={{ y: imageY }}>
        <img src={item.image} alt={item.title} />
      </motion.div>

      <motion.div className="card-content" style={{ y: contentY }}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>

        {item.type === "project" && (
          <>
            <div className="tech-list">
              {item.technologies.map((tech, i) => (
                <span key={i} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-demo"
              >
                🚀 Live Demo
              </a>

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-github"
              >
                ⭐ GitHub
              </a>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

/* =======================
   PROJECT MODAL
======================= */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <>
      <motion.div className="project-modal-overlay" onClick={onClose}>
        <motion.div
          className="project-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <h3>{project.title}</h3>

          <div className="project-techs">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo big"
            >
              🚀 Ver Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github big"
            >
              💻 Ver GitHub
            </a>
          </div>

          <div className="project-gallery">
            {project.gallery.map(
              (img, i) =>
                img && (
                  <motion.img
                    key={i}
                    src={img}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setZoomImage(img)}
                  />
                )
            )}
          </div>

          <button onClick={onClose}>✕</button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="image-zoom-overlay"
            onClick={() => setZoomImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={zoomImage}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="zoom-close"
              onClick={() => setZoomImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =======================
   CERTIFICATE MODAL
======================= */

function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) {
  return (
    <motion.div className="project-modal-overlay" onClick={onClose}>
      <motion.div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{certificate.title}</h3>
        <img src={certificate.image} />
        <button onClick={onClose}>✕</button>
      </motion.div>
    </motion.div>
  );
}