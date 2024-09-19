import { TIME_LINE } from '../utils/timeline';

function Timeline() {
  const timeLineList = TIME_LINE.map((val, idx) => {
    return (
      <div key={idx}>
        <p>{val.month}</p>
        <p>{val.year}</p>
        <p>{val.event}</p>
      </div>
    );
  });

  return <>{timeLineList}</>;
}

export default Timeline;
