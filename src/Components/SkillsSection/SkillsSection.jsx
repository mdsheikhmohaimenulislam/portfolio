import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import SingleCard from "./SingleCard";
import { skills } from "../skills";

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
// bg-[#060b16]
  return (
    <section
      id="skills"
      ref={ref}
      className="py-10  bg-base-300 mt-10"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="mb-10">

          <h2 className="text-5xl font-bold text-black">
            Tech <span className="text-blue-500">Stacks</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Production-grade tools across the full stack.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-1 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`rounded-2xl border border-white bg-base-300
              p-6 hover:border-blue-500 transition-all duration-500
              ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${categoryIndex * 150}ms`,
              }}
            >
              {/* Category */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-black">
                  {category.title}
                </h3>

                <p className="uppercase text-[10px] tracking-[4px] text-gray-500 mt-1">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-5">
                {category.items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`transition-all duration-700 ${
                      inView
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                    style={{
                      transitionDelay: `${
                        categoryIndex * 150 + index * 80
                      }ms`,
                    }}
                  >
          
                    <Tilt
                      scale={1.08}
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                    >
                      <SingleCard data={item} />
                    </Tilt>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;