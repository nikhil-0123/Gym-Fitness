import React from "react";
import workout from "../assest/Feature/F1.avif"
import track from "../assest/Feature/F2.png"
import guid from "../assest/Feature/F3.jpg"
import support from "../assest/Feature/F4.jpg"
import calorie from "../assest/Feature/F5.png"
const features = [
  {
    title: "Personalized Workouts",
    description:
      "Customized fitness plans tailored to your goals, whether you're a beginner or advanced.",
    image: workout,
  },
  {
    title: "Track Progress",
    description:
      "Log workouts, count reps, and track calories burned to monitor your fitness journey.",
    image: track,
  },
  {
    title: "Expert Guidance",
    description:
      "Access professional advice and workout strategies from experienced trainers.",
    image: guid,
  },
  {
    title: "Community Support",
    description:
      "Connect with like-minded individuals and stay motivated with our fitness community.",
    image: support,
  },
  {
    title: "Calorie Tracking",
    description:
      "Easily monitor your daily calorie intake and balance nutrition for a healthier lifestyle.",
    image: calorie,
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
