import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div id="project" className="mt-40 text-center">
      <h1 className="text-3xl  text-center font-bold underline decoration-blue-500 decoration-4 mb-2">
        MY PROJECTS
      </h1>
      <p className="mb-10 text-center font-bold">
        {" "}
        A showcase of the projects I have worked on, highlighting my skills and
        experience in various technologies
      </p>
      <div className="bg-base-200 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1 card */}
          <div>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src="/A10.png" alt="photo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">GreenNest</h2>
                <p className="text-gray-600">
                  GreenNest is Bangladesh’s go-to hub for plant lovers—whether
                  you're a newbie or a seasoned green thumb. Discover unique
                  plants, care tips, and grow your dream garden with a
                  passionate community.
                </p>
                <div className="grid grid-cols-4 gap-2  text-center ">
                  <p className="bg-base-300  rounded-xl">React</p>
                  <p className="bg-base-300 rounded-xl">Tailwind CSS</p>
                  <p className="bg-base-300  rounded-xl">DaisyUI</p>
                  <p className="bg-base-300  rounded-xl">Firebase</p>
                  <p className="bg-base-300  rounded-xl">React Router </p>
                  <p className="bg-base-300  rounded-xl">Express.js</p>
                  <p className="bg-base-300  rounded-xl">MongoDB </p>
                  <p className="bg-base-300  rounded-xl">Node.js</p>
                </div>
                <div className="card-actions mt-2">
                  <div className="btn hover:bg-blue-500 hover:text-white">
                    <Link
                      to="https://github.com/mdsheikhmohaimenulislam/Assignment-10"
                      className="flex gap-1 items-center"
                    >
                      <FaArrowUpRightFromSquare /> Code
                    </Link>
                  </div>
                  <div className="btn hover:bg-blue-500 hover:text-white">
                    <Link to="https://greennest-dd0be.web.app/">Live Demo</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 card */}
          <div>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src="/A11.png" alt="photo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">World's Marathons</h2>
                <p className="text-gray-600">
                  World’s Marathons is a global platform for runners and
                  organizers, offering dynamic marathon listings, easy
                  ticketing, live countdowns, and secure user access—all in one
                  place.
                </p>
                <div className="grid grid-cols-4 gap-2  text-center ">
                  <p className="bg-base-300  rounded-xl">React</p>
                  <p className="bg-base-300 rounded-xl">Tailwind CSS</p>
                  <p className="bg-base-300  rounded-xl">DaisyUI</p>
                  <p className="bg-base-300  rounded-xl">Firebase</p>
                  <p className="bg-base-300  rounded-xl">React Router </p>
                  <p className="bg-base-300  rounded-xl">Express.js</p>
                  <p className="bg-base-300  rounded-xl">MongoDB </p>
                  <p className="bg-base-300  rounded-xl">Node.js</p>
                </div>
                <div className="card-actions mt-2">
                  <div className="btn hover:bg-blue-500 hover:text-white">
                    <Link
                      to="https://github.com/mdsheikhmohaimenulislam/Assignment-11"
                      className="flex gap-1 items-center"
                    >
                      <FaArrowUpRightFromSquare /> Code
                    </Link>
                  </div>
                  <div className="btn hover:bg-blue-500 hover:text-white">
                    <Link to="https://worldsmarathons-ab5a1.web.app/">
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 card */}
          <div>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src="/A9.png" alt="photo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">AppStore</h2>
                <p className="text-gray-600">
                  A modern front-end web application that showcases an App
                  Store-like interface where users can browse apps by category,
                  view details, and log in to access personalized content.
                </p>
                <div className="grid grid-cols-4 gap-2  text-center ">
                  <p className="bg-base-300  rounded-xl">React</p>
                  <p className="bg-base-300 rounded-xl">Tailwind CSS</p>
                  <p className="bg-base-300  rounded-xl">DaisyUI</p>
                  <p className="bg-base-300  rounded-xl">Firebase</p>
                  <p className="bg-base-300  rounded-xl">React Router </p>
                </div>
                <div className="card-actions mt-2">
                  <div className="btn hover:bg-blue-500 hover:text-white">
                    <Link
                      to="https://github.com/mdsheikhmohaimenulislam/Assignment-9"
                      className="flex gap-1 items-center"
                    >
                      <FaArrowUpRightFromSquare /> Code
                    </Link>
                  </div>
                  <div className="btn hover:bg-blue-500 hover:text-white">
                    <Link to="https://appstore-40c54.web.app/">Live Demo</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
