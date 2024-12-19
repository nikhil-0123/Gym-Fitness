import React from 'react';
import Features from '../components/Features';
import TrackProgress from '../components/TrackProgress';
import Testimonials from "../components/Testimonials";
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
    <div className="h-[80vh] bg-banner bg-fixed bg-cover">
      <div className="flex flex-col justify-center items-center h-full  z-10 text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Track Your Fitness Journey
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-3xl leading-relaxed">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay motivated
          and achieve your goals with our user-friendly interfaces.
        </p>
      </div>
    </div>
    <Features/>
    <TrackProgress/>
    <Testimonials/>
    <FAQ/>
    </div>
  );
};

export default Home;