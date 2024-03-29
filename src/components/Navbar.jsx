import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="  mb-20 flex  items-center justify-between py-6">
      <div className="  flex m-8 items-center ml-auto gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/devesh-pal-74bbb21aa/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/deveshpal007">
          {" "}
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/">
          {" "}
          <FaInstagram />
        </a>
        <a href="https://twitter.com/?lang=en">
          {" "}
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
