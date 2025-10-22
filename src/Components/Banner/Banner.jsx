import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import MediaLink from "./MediaLink";
import CV from "./CV";

const Banner = () => {
  return (
    <div
      id="home"
      className="hero bg-base-300 overflow-hidden py-10    w-full h-screen bg-cover bg-center transition-all duration-700"
    >
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse lg:justify-between">
        {/* Tilted Profile Image */}
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <div className="flex items-center justify-center">
            <img
              src="/1.png"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full shadow-2xl object-cover"
              alt="Profile"
            />
          </div>
        </Tilt>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-3xl font-extrabold mb-2">Hi, I'm</h3>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Mohaimenul Islam
          </h1>

          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
            I'm a{" "}
            <span className="text-blue-500">
              <TypeAnimation
                sequence={["Full Stack Developer", 2000, "", 500]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h3>

          <p className="mb-6">
            I’m a Front End Developer with hands-on experience in building
            dynamic web applications. I’m always curious to learn new
            technologies and improve my skills. Eager to learn, grow, and
            contribute to real-world projects in a collaborative development
            environment.
          </p>

          <div className="flex mb-3 gap-2 items-center justify-center md:justify-center ">
            <CV />
            <MediaLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
