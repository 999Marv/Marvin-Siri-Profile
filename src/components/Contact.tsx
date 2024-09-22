import { Link } from 'react-scroll';
import { Ids } from '../utils/constants';
import dog from '/src/assets/dog.jpg';

function Contact() {
  return (
    <p className="text-black">
      If you think I'd be a good fit for your company, you'd just like to chat
      lets{' '}
      <Link
        to={Ids.ContactList}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:underline text-red"
      >
        connect!
      </Link>
      <br />
      <br />
      Here's a photo of this cool dog I saw when I visited San Fransisco this
      year in September :)
      <br />
      <br />
      <img src={dog} alt={`Picture of a doggo`} className="" />
    </p>
  );
}

export default Contact;
