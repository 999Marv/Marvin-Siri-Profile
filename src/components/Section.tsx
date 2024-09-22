import { SectionProps } from '../types/sectionProps';

function Section({ title, id, children, bg }: SectionProps) {
  return (
    <section id={id} className={`p-8 ${bg}`}>
      <h1 className="text-3xl text-red font-extrabold pb-4">{title}</h1>
      {children}
    </section>
  );
}

export default Section;
