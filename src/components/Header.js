import { Link } from 'react-router-dom';
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [DietPlan, setDietPlan] = useState(false);
  const [WorkoutPlan, setWorkoutPlan] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dietPlanRef = useRef(null);
  const workoutPlanRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dietPlanRef.current && !dietPlanRef.current.contains(event.target)) {
        setDietPlan(false);
      }
      if (workoutPlanRef.current && !workoutPlanRef.current.contains(event.target)) {
        setWorkoutPlan(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="h-16 shadow-md bg-indigo-500 fixed w-full z-50">
      <div className="flex justify-between items-center h-full px-4 lg:px-10">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white">Gym Fitness</Link>
        </div>

        <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div
          className={`lg:flex lg:items-center lg:gap-4 text-lg text-white transition-transform duration-300 ${
            menuOpen ? "fixed top-16 left-0 bg-indigo-500 w-full p-4 flex flex-col gap-4" : "hidden lg:flex"
          }`}
        >
          <div className="flex items-center p-2 hover:bg-indigo-800 rounded-md relative" ref={dietPlanRef}>
            <Link to="/DietPlan" className="ml-4">Diet plan</Link>
            <div
              className="cursor-pointer text-xl ml-2"
              onClick={() => setDietPlan((prev) => !prev)}
            >
              {DietPlan ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </div>
            {DietPlan && (
              <div className="absolute top-10 bg-indigo-500 text-white p-2 w-44 rounded  shadow-md">
                <Link to="/DietPlan/1" className="block px-4 py-2 hover:bg-indigo-800">Weight Loss</Link>
                <Link to="/DietPlan/2" className="block px-4 py-2 hover:bg-indigo-800">Weight Gain</Link>
                <Link to="/DietPlan/3" className="block px-4 py-2 hover:bg-indigo-800">Maintenance</Link>
                <Link to="/DietPlan/4" className="block px-4 py-2 hover:bg-indigo-800">Vegan Diet Plan</Link>
                <Link to="/DietPlan/5" className="block px-4 py-2 hover:bg-indigo-800">Fat Loss</Link>
              </div>
            )}
          </div>

          <div className="flex items-center relative p-2 hover:bg-indigo-800 rounded-md " ref={workoutPlanRef}>
            <Link to="/WorkoutPlan" className="ml-4">Workout plan</Link>
            <div
              className="cursor-pointer text-xl ml-2"
              onClick={() => setWorkoutPlan((prev) => !prev)}
            >
              {WorkoutPlan ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </div>
            {WorkoutPlan && (
              <div className="absolute top-10 bg-indigo-500 text-white p-2 w-48 rounded shadow-md">
                <Link to="/WorkoutPlan/1" className="block px-4 py-2 hover:bg-indigo-800">Strength Training</Link>
                <Link to="/WorkoutPlan/2" className="block px-4 py-2 hover:bg-indigo-800">Cardio</Link>
                <Link to="/WorkoutPlan/3" className="block px-4 py-2 hover:bg-indigo-800">Flexibility</Link>
                <Link to="/WorkoutPlan/4" className="block px-4 py-2 hover:bg-indigo-800">HIIT</Link>
              </div>
            )}
          </div>

          <Link to="/blog" className="ml-4 p-2 hover:bg-indigo-800 rounded-md ">Blog</Link>
          <Link to="/contact-us" className="ml-4 p-2 hover:bg-indigo-800 rounded-md ">Contact Us</Link>
          <Link to="/pricing" className="ml-4 p-2 hover:bg-indigo-800 rounded-md ">Pricing</Link>
          <Link to="/about-us" className="ml-4 p-2 hover:bg-indigo-800 rounded-md ">About Us</Link>
        </div>

        <div className="hidden lg:flex items-center text-white text-lg">
          <Link to="GetStarted/" className="ml-4 rounded-full bg-green-600 px-4 py-2 hover:bg-green-500">Get Started</Link>
          <Link to="Login/" className="ml-4 rounded-full bg-green-600 px-4 py-2 hover:bg-green-500">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
