import { useEffect, useState } from "react";
import { Project } from "../types/project";

const ProjectItem = ({ project }: { project: Project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (!project.images) return;
    setCurrentImage(
      (prev) => (prev + 1) % (project.images ? project.images.length : 1)
    );
  };

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white w-full flex flex-col p-4">
      <h3 className="text-xl text-center font-semibold text-gray-800 pb-4 border-b">
        {project.title}
      </h3>
      {project.images && (
        <div className="relative w-full max-w-[90%] mx-auto aspect-[16/9] overflow-hidden">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Screenshot of ${project.title}`}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                idx === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      )}
      <div className="flex-grow overflow-y-auto py-6">
        <ul className="space-y-2 text-base text-gray-600 mb-4">
          {project.description.map((desc, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 text-gray-400">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-4 space-y-2">
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
