import { TIME_LINE } from '../utils/timeline';

function Timeline() {
  return (
    <>
      {TIME_LINE.map((val, idx) => (
        <details className="my-4" key={idx}>
          <summary className="text-lg font-bold">
            {val.date} - {val.event}
          </summary>
          <p className="text-base pt-2">hi</p>
        </details>
      ))}
    </>
  );
}

export default Timeline;
