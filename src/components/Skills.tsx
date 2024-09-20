import { images } from '../assets';

function Skills() {
  const skillList = images.map((val, idx) => {
    return (
      <li key={idx}>
        <img src={val} alt={`Skill ${idx}`} />
      </li>
    );
  });
  return <ul>{skillList}</ul>;
}

export default Skills;
