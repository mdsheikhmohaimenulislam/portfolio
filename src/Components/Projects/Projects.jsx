import { FaArrowUpRightFromSquare, FaEye } from "react-icons/fa6";
import { Link } from "react-router";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <section id="project" className="mt-10 px-4 md:px-0 bg-base-300 pt-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold underline decoration-blue-500 decoration-4">
          MY PROJECTS
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          A showcase of my projects, skills and experience.
        </p>
      </div>

      <div className="p-6 rounded-xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>

                <p className="text-gray-600 text-sm">
                  {project.description.slice(0, 120)}...
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies
                    .slice(0, 4)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-base-300"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn border border-blue-500"
                  >
                    <FaArrowUpRightFromSquare />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="btn bg-blue-500 text-white "
                  >
                    Live
                  </a>

                  <Link
                    to={`/project/${project.id}`}
                    className="btn btn-outline"
                  >
                    <FaEye />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;