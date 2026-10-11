
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/contact.jsx";

import "./App.css";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Brijendra Jha. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;