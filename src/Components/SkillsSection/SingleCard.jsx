import React from "react";

const SingleCard = ({ data }) => {
  return (
    <div className="w-24 group cursor-pointer">
      {/* Icon Box */}
      <div
        className="
          h-20 w-20
          mx-auto
          rounded-xl
          border border-white

          flex items-center justify-center
          transition-all duration-300
          group-hover:border-blue-500
          group-hover:-translate-y-1
          group-hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
        "
      >
        <img
          src={data.img}
          alt={data.title}
          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Skill Name */}
      <h3 className="mt-3 text-center text-sm text-black font-medium leading-tight">
        {data.title}
      </h3>
    </div>
  );
};

export default SingleCard;