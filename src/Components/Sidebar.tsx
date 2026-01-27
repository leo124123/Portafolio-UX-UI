import { motion } from "framer-motion";
import { Home, User, Code2, Briefcase, Mail } from "lucide-react";
import { Link } from "react-scroll";
import "./Css/Sidebar.css";

const items = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function Sidebar() {
  return (
    <motion.aside
      className="neo-sidebar"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="neo-line" />

      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Link
            key={i}
            to={item.id}
            smooth={true}
            spy={true}
            offset={-80}
            duration={700}
            activeClass="active"
          >
            <motion.div
              className="neo-icon"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Icon size={18} />
              <span className="neo-tooltip">{item.label}</span>
              <span className="neo-ripple" />
            </motion.div>
          </Link>
        );
      })}
    </motion.aside>
  );
}
