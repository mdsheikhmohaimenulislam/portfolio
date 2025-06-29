import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-10 mt-40">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-center">
          <span className="text-blue-500">&lt;</span>
          Mohaimenul
          <span className="text-blue-500">/</span>
          islam
          <span className="text-blue-500">&gt;</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center justify-center">
          <a
            className="cursor-pointer"
            href="https://github.com/mdsheikhmohaimenulislam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            className="text-green-500 cursor-pointer"
            href="https://wa.me/8801715755177"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            className="text-blue-500 cursor-pointer"
            href="https://www.facebook.com/mohymimislam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook size={30} />
          </a>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-center">
          {["home", "project", "skills", "about", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-blue-500 font-extrabold border-b-2 border-blue-500"
                className="text-base md:text-xl font-semibold cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Text */}
        <aside className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="text-blue-400 font-semibold">Mohaimenul Islam</span>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
