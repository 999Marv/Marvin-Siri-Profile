import { Link } from 'react-scroll';
import { Titles, Ids } from '../utils/constants';

function Navigation() {
  return (
    <nav className="text-red text-xl font-bold h-full p-6">
      <ul className="space-y-4">
        {Object.entries(Titles).map(([key, value]) => (
          <li key={key}>
            <Link
              to={Ids[key as keyof typeof Ids]}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:underline block"
            >
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
