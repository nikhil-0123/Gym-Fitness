import React from "react";
import { Link } from "react-router-dom";
import JohnDoe from "../assest/JohnDoe.png"
import EmilyClark from "../assest/EmilyClark.png"
import MichaelSmith from "../assest/MichaelSmith.png"




const testimonials = [
  {
    name: "John Doe",
    rating: 5,
    title: "Best Fitness App!",
    description: "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    avatar: JohnDoe,
  },
  {
    name: "Emily Clark",
    rating: 5,
    title: "So Easy to Use!",
    description: "I love how user-friendly the app is. Logging workouts has never been easier!",
    avatar: EmilyClark,
  },
  {
    name: "Michael Smith",
    rating: 5,
    title: "Incredible Progress Tracker!",
    description: "I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
    avatar: MichaelSmith,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.rating} star out of 5{" "}
                    <span className="text-yellow-500">{"★".repeat(testimonial.rating)}</span>
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-green-600 mb-2">{testimonial.title}</h4>
              <p className="text-gray-600">{testimonial.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/CustomerReviews"
            className="text-blue-600 hover:underline font-semibold"
          >
            More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
