import { Ids, Titles } from '../utils/constants';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Section from './Section';
import Skills from './Skills';
import Timeline from './Timeline';

// Renders the main content sections of the application
const sectionsData = [
  { title: Titles.About, id: Ids.About, component: <About /> },
  { title: Titles.Skills, id: Ids.Skills, component: <Skills /> },
  { title: Titles.Timeline, id: Ids.Timeline, component: <Timeline /> },
  { title: Titles.Projects, id: Ids.Projects, component: <Projects /> },
  { title: Titles.Contact, id: Ids.Contact, component: <Contact /> },
];

function ContentSections() {
  return (
    <main className="font-sans font text-lg bg-cream pr-4">
      {sectionsData.map((section, idx) => (
        <Section
          key={idx}
          title={section.title}
          id={section.id}
          bg={idx % 2 === 0 ? '' : 'bg-lightCream'}
        >
          {section.component}
        </Section>
      ))}
    </main>
  );
}

export default ContentSections;
