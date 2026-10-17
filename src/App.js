import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import BackgroundFX from './components/BackgroundFX';
import { portfolio } from './data/portfolioData';

function App() {
  return (
    <>
      <BackgroundFX />
      <div className="App">
        <ScrollProgress />
        <Header name={portfolio.shortName} />
        <main>
          <Hero
            name={portfolio.name}
            roles={portfolio.roles}
            tagline={portfolio.tagline}
            projectCount={portfolio.projects.length}
          />
          <About about={portfolio.about} />
          <Skills skills={portfolio.skills} />
          <Projects projects={portfolio.projects} />
          <Experience experience={portfolio.experience} />
          <Contact
            email={portfolio.email}
            phone={portfolio.phone}
            social={portfolio.social}
            location={portfolio.location}
          />
        </main>
        <Footer name={portfolio.name} />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
