import { PROJECTS } from '../utils/projects';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <section className="projects-section py-8 flex justify-center">
      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
        {PROJECTS.map((project, idx) => (
          <ProjectItem key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
