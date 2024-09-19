import { Link } from 'react-scroll';

function Navigation() {
  return (
    <nav className="fixed top-0 w-full text-red py-4 text-3xl font-extrabold">
      <ul className="container mx-auto flex justify-center space-x-6">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="timeline"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Timeline
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
