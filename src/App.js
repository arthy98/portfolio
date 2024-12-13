import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Details from './components/Details';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Details />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}


export default App;
