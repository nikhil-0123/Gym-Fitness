import React from "react";
import Janeroy from "../assest/Janeroy.png"
import RobertGreen from "../assest/RobertGreen.png"
import JohnDoe from "../assest/JohnDoe.png"
import EmilyClark from "../assest/EmilyClark.png"
import MichaelSmith from "../assest/MichaelSmith.png"

const reviews = [
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
  {
    name: "Jane roy",
    rating: 5,
    title: "Fantastic App!",
    description: "The app has helped me stay consistent with my workouts. Highly recommend it!",
    avatar: Janeroy,
  },
  {
    name: "Robert Green",
    rating: 4,
    title: "Very Useful",
    description: "Tracking my exercises has never been easier. A must-have for fitness enthusiasts!",
    avatar: RobertGreen,
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-600">
                    {review.rating} star out of 5{" "}
                    <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-green-600 mb-2">{review.title}</h4>
              <p className="text-gray-600">{review.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
