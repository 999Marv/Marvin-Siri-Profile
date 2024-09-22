import { skills } from '../assets';

function Skills() {
  const skillList = skills.map((val, idx) => {
    return (
      <li key={idx}>
        <img
          src={val}
          alt={`Skill ${idx}`}
          className="w-16 h-16 hover:opacity-80"
        />
      </li>
    );
  });
  return <ul className="flex pt-4 justify-center gap-4">{skillList}</ul>;
}

export default Skills;
