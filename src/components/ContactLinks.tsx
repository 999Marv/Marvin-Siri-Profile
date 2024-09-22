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
            className="w-14 h-14 hover:opacity-80"
          />
        </a>
      </li>
    );
  });
  return <ul className="flex pt-4 gap-4">{contactList}</ul>;
}

export default ContactLinks;
