import { skills } from '../assets';

function Skills() {
  const skillList = skills.map((val, idx) => {
    return (
      <li key={idx}>
        <img src={val} alt={`Skill ${idx}`} className="w-16 h-16" />
      </li>
    );
  });
  return <ul className="flex pt-4 justify-center gap-6">{skillList}</ul>;
}

export default Skills;
