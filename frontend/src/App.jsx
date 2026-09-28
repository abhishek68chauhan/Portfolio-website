import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">

      <Header />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:id"
            element={<ProjectDetails />}
          />

          <Route
            path="/experience"
            element={<Experience />}
          />

          <Route
            path="/education"
            element={<Education />}
          />

          <Route
            path="/resume"
            element={<Resume />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;