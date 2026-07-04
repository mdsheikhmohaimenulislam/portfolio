import React from "react";
import Tilt from "react-parallax-tilt";
import services from "./servicesData";
import ServiceSingleCard from "./ServiceSingleCard";

const Services = () => {
  return (
    <>
      <section className="py-16 bg-base-300 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-black">
              What I <span className="text-blue-500">Do</span>
            </h2>

            <p className="text-gray-400 mt-3">
              I offer a range of services to build modern, responsive and
              user-friendly web applications.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{services.map((service, indexs) => (
  <ServiceSingleCard
    key={service.title}
    service={service}
    index={indexs}
  />
))}
          </div>
          <Tilt scale={1.08} tiltMaxAngleX={15} tiltMaxAngleY={15}></Tilt>
        </div>
      </section>
    </>
  );
};

export default Services;
