import { Titles, Ids } from '../utils/Constants';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Section from './Section';
import Timeline from './Timeline';

// Renders the main content sections of the application
function ContentSections() {
  return (
    <main className="pt-16 bg-cream font-sans font text-lg">
      <Section title={Titles.About} id={Ids.About}>
        <About />
      </Section>
      <Section title={Titles.Timeline} id={Ids.Timeline}>
        <Timeline />
      </Section>
      <Section title={Titles.Projects} id={Ids.Projects}>
        <Projects />
      </Section>
      <Section title={Titles.Contact} id={Ids.Contact}>
        <Contact />
      </Section>
    </main>
  );
}

export default ContentSections;
