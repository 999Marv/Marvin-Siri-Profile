import { contactLinks } from '../assets';

function ContactLinks() {
  return (
    <ul className="flex pt-8 gap-8" id="contact-list">
      {contactLinks.map((val, idx) => {
        const [image, link, name] = val;
        return (
          <li key={idx}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`${link}`}
                className="w-14 h-14 hover:opacity-80"
              />
            </a>
            <p className="text-gray-500 text-base">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactLinks;
