import { skills } from '../assets';

function Skills() {
  return (
    <ul className="flex pt-4 justify-center gap-6 flex-wrap">
      {skills.map((val, idx) => (
        <li key={idx}>
          <img src={val} alt={`Skill ${idx}`} className="w-16 h-16" />
        </li>
      ))}
    </ul>
  );
}

export default Skills;
