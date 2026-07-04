import { useParams, Link } from "react-router";
import { projects } from "./projectsData";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <Link to="/#project" className="btn mt-5">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">

      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full"
        />
      </div>


      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">
        {project.title}
      </h1>

      <p className="text-gray-500 mb-8 ">
        {project.description}
      </p>


      {/* Features */}
      <h2 className="text-2xl font-bold mb-4">
        Features
      </h2>

      <div className="space-y-2 mb-10">
        {project.features.map((f) => (
          <p key={f} className="flex gap-2">
            ✔ {f}
          </p>
        ))}
      </div>

            {/* Tech Stack */}
      <h2 className="text-2xl font-bold mb-4">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-3 mb-10">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap mb-16">
        <a
          href={project.github}
          target="_blank"
          className="btn border border-blue-500"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          className="btn bg-blue-500 text-white"
        >
          Live Demo
        </a>

        <Link
          to="/#project"
          className="btn"
        >
          Back
        </Link>
      </div>

      {/* Related */}
      {/* <h2 className="text-3xl font-bold mb-6">
        Related Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {projects
          .filter((p) => p.id !== project.id)
          .slice(0, 3)
          .map((p) => (
            <div
              key={p.id}
              className="card bg-base-100 shadow"
            >
              <img
                src={p.image}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">
                  {p.title}
                </h3>
                <Link
                  to={`/project/${p.id}`}
                  className="text-blue-500 text-sm btn"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
      </div> */}

    </div>
  );
};

export default ProjectDetails;