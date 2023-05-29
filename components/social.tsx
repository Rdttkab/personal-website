import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="https://linkedin.com/in/rediettekola"
        className="hover:text-blue-500"
        target="_blank">
        <FontAwesomeIcon className="mx-8 text-2xl w-6" icon={faLinkedinIn} />
      </Link>

      <Link
        href="https://twitter.com/rdttkab"
        className="hover:text-blue-500"
        target="_blank">
        <FontAwesomeIcon className="mr-8 text-2xl w-6" icon={faTwitter} />
      </Link>
      <Link
        href="https://github.com/Rdttkab"
        className="hover:text-blue-500"
        target="_blank">
        <FontAwesomeIcon className="mr-4 text-2xl w-6" icon={faGithub} />
      </Link>
    </div>
  );
};

export default Social;
