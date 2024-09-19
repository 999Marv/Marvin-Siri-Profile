import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Section from './Section';
import Timeline from './Timeline';

function ContentSections() {
  return (
    <main className="pt-16 bg-cream font-sans font text-lg">
      <Section title="About" id="about">
        <About />
      </Section>
      <Section title="Timeline" id="timeline">
        <Timeline />
      </Section>
      <Section title="Projects" id="projects">
        <Projects />
      </Section>
      <Section title="Contact" id="contact">
        <Contact />
      </Section>
    </main>
  );
}

export default ContentSections;
