import { Link } from 'react-scroll';
import { Ids } from '../utils/constants';
import dog from '/src/assets/dog.jpg';

function Contact() {
  return (
    <div className="text-black flex flex-col items-center">
      <p className="mb-4">
        If you think I'd be a good fit for your company or you'd just like to
        chat lets{' '}
        <Link
          to={Ids.ContactList}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline text-red"
        >
          connect!
        </Link>
      </p>
      <p className="mb-4 text-center">
        Here's a photo of this cool dog I saw when I visited San Francisco this
        year in September :)
      </p>
      <img
        src={dog}
        alt="Picture of a doggo"
        className="w-96 h-96 object-cover rounded-lg shadow-md"
      />
    </div>
  );
}

export default Contact;
