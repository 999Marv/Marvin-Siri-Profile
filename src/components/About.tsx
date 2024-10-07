import ContactLinks from './ContactLinks';
import me from '/src/assets/marvin pic.jpg';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
      <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={me}
          alt="A picture of me"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <p className="text-black text-sm sm:text-base">
          Hi, I'm Marvin! I'm a software engineer based in New York City with a
          passion for technology and development. During my internship at
          TodayTix Group, I contributed to launching a rewards system that
          impacted over 500,000 users, focusing on backend development using
          Groovy and SQL.
          <br />
          <br />
          I'm a quick learner who enjoys taking on new challenges. Currently, I
          picked up Python to learn a new skill and broaden my job search and
          get better at data structures and algorithms through Leetcode.
          <br />
          <br />
          Beyond tech, I have interests in football, video games, anime, manga,
          traveling, and movies.
          <br />
          <br />
          I'm actively seeking software engineering and adjacent roles,
          including Fullstack, Frontend, Backend, QA, and DevOps.
        </p>
        <ContactLinks />
      </div>
    </div>
  );
}

export default About;
