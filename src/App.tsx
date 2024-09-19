import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
      <Navigation />
      <main className="pt-16 bg-cream font-sans font text-lg">
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
