import { PROJECTS } from '../utils/projects';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {PROJECTS.map((project, idx) => (
        <ProjectItem key={idx} project={project} />
      ))}
    </section>
  );
}

export default Projects;
