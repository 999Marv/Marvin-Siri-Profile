import { Project } from '../types/project';

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white w-full h-[500px] flex flex-col">
      <h3 className="text-xl text-center font-semibold text-gray-800 p-6 border-b">
        {project.title}
      </h3>
      <div className="flex-grow overflow-y-auto p-6">
        <ul className="space-y-2 text-base text-gray-600 mb-4">
          {project.description.map((desc, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 text-gray-400">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t p-6 space-y-2">
        {project.links.map((link, idx) => (
          <a
            href={link.url}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-500 hover:text-blue-700 transition-colors"
          >
            {link.text}
          </a>
        ))}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-green-500 hover:text-green-700 transition-colors"
          >
            Take a look at our demo!
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
