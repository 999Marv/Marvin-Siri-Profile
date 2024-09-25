import { contactLinks } from '../assets';

function ContactLinks() {
  return (
    <ul
      className="flex flex-wrap justify-center pt-4 md:pt-8 gap-4 md:gap-8"
      id="contact-list"
    >
      {contactLinks.map((val, idx) => {
        const [image, link, name] = val;
        return (
          <li key={idx} className="text-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`${link}`}
                className="w-10 h-10 md:w-14 md:h-14 hover:opacity-80 mx-auto"
              />
            </a>
            <p className="text-gray-500 text-xs md:text-base mt-1">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactLinks;
