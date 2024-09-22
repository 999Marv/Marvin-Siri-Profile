import { contactLinks } from '../assets';

function ContactLinks() {
  return (
    <ul className="flex pt-8 gap-4" id="contact-list">
      {contactLinks.map((val, idx) => {
        const [image, link] = val;
        return (
          <li key={idx}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`${link}`}
                className="w-14 h-14 hover:opacity-80"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactLinks;
