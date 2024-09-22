import { PROJECTS } from '../utils/projects';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <section className="flex justify-center">
      {PROJECTS.map((project, idx) => (
        <ProjectItem key={idx} project={project} />
      ))}
    </section>
  );
}

export default Projects;
