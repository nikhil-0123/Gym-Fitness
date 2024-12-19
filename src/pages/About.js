import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-4 py-8 sm:px-8 md:px-12">
      <div className="bg-gray-100 py-20 mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Gym Fitness</h1>
        <p className="text-lg text-gray-600">Your journey to fitness starts here!</p>
      </div>
      <div className="space-y-6">
        <p className="text-gray-700 text-xl">
          At Gym Fitness, we are dedicated to helping you achieve your fitness goals in a motivating and
          supportive environment. Whether you're new to exercise or a seasoned athlete, our team of experts is
          here to guide you every step of the way.
        </p>
        <p className="text-gray-700 text-xl">
          We offer a variety of fitness programs, from strength training to cardio, yoga to HIIT, designed for all
          fitness levels. Our modern facility is equipped with state-of-the-art equipment to help you reach your
          full potential.
        </p>
        <p className="text-gray-700 text-xl">
          Join us and become part of a vibrant community committed to health, fitness, and personal transformation.
          Together, we'll help you reach new heights!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
