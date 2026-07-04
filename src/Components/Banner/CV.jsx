import React from "react";
import { FaEye } from "react-icons/fa6";

export default function CV() {
  return (
    <div>
      <a
        href="./MohaimenulIslam-Resume-FrontEnd-Developer.pdf"
        download
        className="inline-block text-sm sm:text-base bg-blue-500 text-white font-bold rounded-2xl px-4 py-2 hover:bg-blue-600 transition"
      >
        <FaEye />
        Download Resume
      </a>
    </div>
  );
}
