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
  return (
    <section id="timeline" className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-red">Timeline</h1>
      {timeLineList}
    </section>
  );
}

export default Timeline;
