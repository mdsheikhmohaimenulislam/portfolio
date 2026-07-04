import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaBug,
  FaRocket,
  FaServer,
} from "react-icons/fa";

import { IoIosLink } from "react-icons/io";

const services = [
  {
    title: "Frontend Development",
    desc: "Build modern, responsive UIs using React & Tailwind CSS.",
    icon: FaCode,
  },
  {
    title: "UI/UX Implementation",
    desc: "Convert designs into clean, pixel-perfect interfaces.",
    icon: FaPaintBrush,
  },
  {
    title: "Backend Development",
    desc: "Develop secure REST APIs using Node.js & Express.",
    icon: FaServer,
  },
  {
    title: "API Integration",
    desc: "Connect frontend with backend services efficiently.",
    icon: IoIosLink,
  },
  {
    title: "Responsive Design",
    desc: "Ensure seamless experience across all devices.",
    icon: FaMobileAlt,
  },
  {
    title: "Performance Optimization",
    desc: "Improve speed, SEO, and overall application performance.",
    icon: FaRocket,
  },
];

export default services;