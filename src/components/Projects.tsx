function Projects() {
  const projects = [
    {
      name: 'Project One',
      description: 'This is a description of Project One.',
      link: 'https://github.com/999Marv/project-one',
    },
    {
      name: 'Project Two',
      description: 'This is a description of Project Two.',
      link: 'https://github.com/999Marv/project-two',
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="text-2xl font-bold">Projects</h2>
      <ul className="mt-4 space-y-4">
        {projects.map((project, idx) => (
          <li key={idx} className="border p-4">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-600 underline">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
