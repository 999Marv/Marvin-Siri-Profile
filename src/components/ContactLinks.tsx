import { contactLinks } from '../assets';

function ContactLinks() {
  const contactList = contactLinks.map((val, idx) => {
    const [image, link] = val;
    return (
      <li key={idx}>
        <a href={link}>
          <img
            src={image}
            alt={`Contact ${idx}`}
            className="w-12 h-12 hover:opacity-80"
          />
        </a>
      </li>
    );
  });
  return <ul>{contactList}</ul>;
}

export default ContactLinks;
