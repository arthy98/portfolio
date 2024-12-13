import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
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
