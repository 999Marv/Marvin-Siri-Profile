import { SectionProps } from '../types/sectionProps';

function Section({ title, id, children }: SectionProps) {
  return (
    <section id={id} className="min-h-screen p-8">
      <h1 className="text-3xl text-red font-extrabold pb-4">{title}</h1>
      {children}
    </section>
  );
}

export default Section;
