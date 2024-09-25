import { skills } from '../assets';

function Skills() {
  return (
    <ul className="flex flex-wrap justify-center pt-2 md:pt-4 gap-4 md:gap-5 lg:gap-7">
      {skills.map((val, idx) => (
        <li key={idx}>
          <img
            src={val}
            alt={`Skill ${idx}`}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
        </li>
      ))}
    </ul>
  );
}

export default Skills;
