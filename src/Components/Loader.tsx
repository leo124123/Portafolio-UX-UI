import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Css/Loader.css";

type Props = {
  onFinish: () => void;
};

export default function Loader({ onFinish }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return p + 1;
      });
    }, 26);

    const timer = setTimeout(() => {
      onFinish();
    }, 3400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Particles */}
      <div className="particles" />

      {/* HUD Lines */}
      <span className="hud-line top" />
      <span className="hud-line bottom" />

      {/* Center */}
      <motion.div
        className="loader-center"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <motion.h1
          className="loader-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          WELCOME 
        </motion.h1>

        <motion.p
          className="loader-system"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          CONNECTING TO INTERFACE
        </motion.p>

        <div className="loader-progress">
          <span>{progress}%</span>
          <div className="bar">
            <motion.div
              className="bar-fill"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
