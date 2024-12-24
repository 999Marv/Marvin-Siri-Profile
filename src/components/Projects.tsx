import { EXTRA_PROJECTS, MAIN_PROJECTS } from "../utils/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <section>
        <h3 className="text-xl font-bold mb-6">Projects I'm Most Proud Of</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {MAIN_PROJECTS.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-6">Some Extra Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {EXTRA_PROJECTS.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
