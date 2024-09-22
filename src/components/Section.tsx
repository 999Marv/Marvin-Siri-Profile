import { SectionProps } from '../types/sectionProps';

function Section({ title, id, children, bg }: SectionProps) {
  return (
    <section id={id} className={`p-24 ${bg}`}>
      <h1 className="text-3xl text-red font-extrabold pb-4 text-center">
        {title}
      </h1>
      {children}
    </section>
  );
}

export default Section;
