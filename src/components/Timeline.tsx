import { TIME_LINE } from '../utils/timeline';

function Timeline() {
  return (
    <>
      {TIME_LINE.map((val, idx) => (
        <details className="border-b border-gray-300 pb-4 mb-4" key={idx}>
          <summary className="text-lg text-gray-800 cursor-pointer hover:text-red">
            <span className="font-bold text-red">{val.event}</span> - {val.date}
          </summary>
          <ul className="pt-2 pl-4 list-disc text-base">
            {val.description.map((desc, idx) => (
              <li key={idx} className="mb-1">
                {desc}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </>
  );
}

export default Timeline;
