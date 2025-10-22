import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const MediaLink = () => {
  return (
    <div className="flex mb-3 gap-2 items-center justify-center md:justify-center ">
      <Link to="https://github.com/mdsheikhmohaimenulislam">
        <FaGithub size={30} />
      </Link>
      <a
        className=" text-green-500"
        href="https://wa.me/8801715755177"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
      <Link to="https://www.facebook.com/mohymimislam">
        <BsFacebook className="text-blue-500" size={30} />
      </Link>
    </div>
  );
};

export default MediaLink;
