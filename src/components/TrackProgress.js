import React from "react";
import step1Img from "../assest/TrackingApp/step1.png";
import step2Img from "../assest/TrackingApp/step2.png";
import step3Img from "../assest/TrackingApp/step3.png";
import step4Img from "../assest/TrackingApp/step4.png";
import step5Img from "../assest/TrackingApp/step5.png";

const steps = [
  {
    step: "Step 1",
    name: "Click on Get Started",
    description: "Begin your journey by clicking on the 'Get Started' button and setting up your profile.",
    image: step1Img,
  },
  {
    step: "Step 2",
    name: "Log Your Exercises",
    description: "Log your daily exercises, including the type of workout, duration, and intensity.",
    image: step2Img,
  },
  {
    step: "Step 3",
    name: "Count Your Reps",
    description: "Easily count your reps and sets while performing your exercises.",
    image: step3Img,
  },
  {
    step: "Step 4",
    name: "Track Your Progress",
    description: "Monitor your progress with detailed analytics and performance reports.",
    image: step4Img,
  },
  {
    step: "Step 5",
    name: "Review Your Progress",
    description: "Review your fitness journey, set new goals, and stay motivated to achieve them.",
    image: step5Img,
  },
];

const TrackProgress = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          5 Steps to Use Our Fitness Tracking App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <div className="justify-between flex text-center items-center">
                <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {step.step}: {step.name}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                </div>

                <img
                  src={step.image}
                  alt={step.name}
                  className="w-42 h-72 mx-auto mb-4 rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackProgress;
