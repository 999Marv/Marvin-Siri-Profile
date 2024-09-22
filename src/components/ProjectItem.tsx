import { Project } from '../types/project';

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
      <ul className="pt-4 pl-4 list-disc text-base text-gray-600">
        {project.description.map((desc, idx) => (
          <li key={idx} className="mb-2">
            {desc}
          </li>
        ))}
      </ul>
      {project.links.map((link, idx) => (
        <a
          href={link.url}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-500 underline hover:text-blue-700"
        >
          {link.text}
        </a>
      ))}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 underline hover:text-blue-700"
        >
          Take a look at our demo!
        </a>
      )}
    </div>
  );
};

export default ProjectItem;
