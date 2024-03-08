import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, description }) => {
  return (
    <Link to="/contact">
      <div className="max-w-md mx-auto mb-5 shadow-lg rounded-xl p-4 cursor-pointer">
        <div className="flex items-center justify-center mb-4">
          {/* Image */}
          <img className="w-full h-64 rounded-xl" src={imageSrc} alt={title} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
