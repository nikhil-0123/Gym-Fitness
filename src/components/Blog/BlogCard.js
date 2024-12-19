import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ image, title, subtitle, description, tag, id }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="max-w-sm rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-md shadow-md">
          <p className="text-xs font-semibold">{subtitle}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {tag}
          </span>
        </div>
        <button
          onClick={handleReadMore}
          className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
