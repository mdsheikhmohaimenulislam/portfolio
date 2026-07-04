import React from "react";
import { motion } from "framer-motion";

const ServiceSingleCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
    >
      <div className="text-4xl text-blue-500 mb-4">
        <Icon />
      </div>

      <h3 className="text-xl font-semibold text-gray-800">
        {service.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {service.desc}
      </p>
    </motion.div>
  );
};

export default ServiceSingleCard;