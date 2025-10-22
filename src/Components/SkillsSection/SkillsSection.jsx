import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import SingleCard from "./SingleCard";

const SkillsSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/skil.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  return (
    <div id="skills" className="text-center mt-40">
      <h1 className="text-3xl font-bold underline decoration-blue-500 decoration-4 mb-10">
        SKILLS
      </h1>
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-5 m-2">
        {data.map((item, index) => (
          <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15}>
            <SingleCard data={item} />
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
