import React from "react";
import { useNavigate } from "react-router-dom";

const WorkoutPlan = ({ id, name, summary, image }) => {

    const navigate = useNavigate();
    const handleReadMore = () => {
        navigate(`/WorkoutPlan/${id}`);
    };

    return (
        <div className="max-w-sm rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-48 object-cover" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mt-2">{summary}</p>
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

export default WorkoutPlan;