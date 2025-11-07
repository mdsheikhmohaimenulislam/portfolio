import React from "react";

export default function SingleCard({ data }) {
  return (
    <div className="card bg-base-100 cursor-pointer shadow-xl border border-base-300 hover:scale-105 transition-transform duration-300">
      <figure className="px-6 pt-6">
        <img
          src={data.logo}
          alt={data.name}
          className="w-20 h-20 object-contain"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-semibold">{data.name}</h2>
      </div>
    </div>
  );
}
