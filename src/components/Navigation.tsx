import { Link } from 'react-scroll';
import { Titles, Ids } from '../utils/constants';

function Navigation() {
  return (
    <nav className="fixed top-0 w-full text-red py-4 text-3xl font-extrabold">
      <ul className="container mx-auto flex justify-center space-x-6">
        <li>
          <Link
            to={Ids.About}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            {Titles.About}
          </Link>
        </li>
        <li>
          <Link
            to={Ids.Timeline}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            {Titles.Timeline}
          </Link>
        </li>
        <li>
          <Link
            to={Ids.Skills}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            {Titles.Skills}
          </Link>
        </li>
        <li>
          <Link
            to={Ids.Projects}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            {Titles.Projects}
          </Link>
        </li>
        <li>
          <Link
            to={Ids.Contact}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            {Titles.Contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
