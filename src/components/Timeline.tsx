import { TIME_LINE } from '../utils/timeline';

function Timeline() {
  const timeLineList = TIME_LINE.map((val, idx) => {
    return (
      <details className="my-4" key={idx}>
        <summary className="text-lg font-bold">
          {val.date} - {val.event}
        </summary>
        <p className="text-base pt-2">hi</p>
      </details>
    );
  });

  return <>{timeLineList}</>;
}

export default Timeline;
