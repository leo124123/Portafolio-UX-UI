import { StrictMode, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Background from "./Components/Background/Background";
import Loader from "./Components/Loader";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import Skills from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact"
import Footer  from "./Components/Footer";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <StrictMode>
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && <Background />}
      {!loading && <Sidebar />}
      {!loading && <Hero />}
      {!loading && <About />}
      {!loading && <Skills />}
      {!loading && <Projects />}
      {!loading && <Contact />}
      {!loading && <Footer />}
    </StrictMode>
  );
}

export default App;
