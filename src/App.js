import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <ThemeProvider>
      <Layout>
        <Navbar />
        <main>
          <section id="details">
            <Header />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="workexperience">
            <WorkExperience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default App;
