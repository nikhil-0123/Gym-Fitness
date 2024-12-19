import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Welcome to Gym Fitness!</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Take the first step on your fitness journey. Sign up today and unlock access to personalized workout plans, diet recommendations, and progress tracking tools.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            to="/Signup"
            className="w-full md:w-auto bg-indigo-500 text-white text-center py-3 px-6 rounded hover:bg-indigo-600 transition duration-300"
          >
            Sign Up Now
          </Link>
          <Link
            to="/login"
            className="w-full md:w-auto bg-gray-200 text-indigo-500 text-center py-3 px-6 rounded hover:bg-gray-300 transition duration-300"
          >
            Already have an account? Login
          </Link>
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            By signing up, you agree to our <Link to="/terms" className="text-indigo-500 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-500 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
