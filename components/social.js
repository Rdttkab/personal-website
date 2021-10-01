import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="flex items-center justify-center">
      <a
        href="https://linkedin.com/in/rediettekola"
        className="hover:text-blue-500"
        target="_blank"
      >
        <FontAwesomeIcon
          className="mx-8 text-2xl w-6"
          icon={faLinkedinIn}
        />
      </a>
      <a
        href="https://twitter.com/rdttkab"
        className="hover:text-blue-500"
        target="_blank"
      >
        <FontAwesomeIcon className="mr-8 text-2xl w-6" icon={faTwitter} />
      </a>
      <a
        href="https://github.com/Rdttkab"
        className="hover:text-blue-500"
        target="_blank"
      >
        <FontAwesomeIcon className="mr-4 text-2xl w-6" icon={faGithub} />
      </a>
    </div>
  );
};

export default Social;
