import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      Connect with me on
      <a
        href="https://linkedin.com/in/rediettekola"
        className="hover:text-lightBlue-600"
        target="_blank"
      >
        <FontAwesomeIcon className="mx-6 text-2xl w-6" icon={faLinkedinIn} />
      </a>
      <a
        href="https://twitter.com/rdttkab"
        className="hover:text-lightBlue-600"
        target="_blank"
      >
        <FontAwesomeIcon className="mr-6 text-2xl w-6" icon={faTwitter} />
      </a>
      <a
        href="https://github.com/Rdttkab"
        className="hover:text-lightBlue-600"
        target="_blank"
      >
        <FontAwesomeIcon className="mr-6 text-2xl w-6" icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
