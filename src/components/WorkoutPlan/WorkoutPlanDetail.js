import React from "react";
import { useParams } from "react-router-dom";
import StrengthTraining from "../../assest/workout/StrengthTraining.png";
import Cardio from "../../assest/workout/Cardio.png";
import Flexibility from "../../assest/workout/Flexibility.png";
import HIIT from "../../assest/workout/HIIT.png";
import Squats from "../../assest/workout/Squats.png";
import Deadlifts from "../../assest/workout/Deadlifts.png";
import BenchPress from "../../assest/workout/BenchPress.png";
import Running from "../../assest/workout/Running.png";
import Cycling from "../../assest/workout/Cycling.png";
import JumpRope from "../../assest/workout/JumpRope.png";
import HamstringStretch from "../../assest/workout/HamstringStretch.png";
import ShoulderStretch from "../../assest/workout/ShoulderStretch.png";
import YogaPoses from "../../assest/workout/YogaPoses.png";
import Burpees from "../../assest/workout/Burpees.png";
import SprintIntervals from "../../assest/workout/SprintIntervals.png";
import MountainClimbers from "../../assest/workout/MountainClimbers.png";

const workoutDetails = {
    1: {
        name: 'Strength Training',
        description: "Strength training helps build muscle, improve metabolism, and enhance overall physical strength. It includes exercises like weight lifting, resistance band exercises, and bodyweight workouts.",
        image: StrengthTraining,
        exercises: [
            { name: "Squats", description: "A lower body exercise targeting thighs and glutes.", image: Squats },
            { name: "Deadlifts", description: "A compound exercise for back, glutes, and legs.", image: Deadlifts },
            { name: "Bench Press", description: "Targets chest, shoulders, and triceps.", image: BenchPress },
        ],
    },
    2: {
        name: 'Cardio',
        description: "Cardio exercises focus on improving heart health and endurance. Examples include running, cycling, swimming, and aerobics.",
        image: Cardio,
        exercises: [
            { name: "Running", description: "Improves cardiovascular endurance.", image: Running },
            { name: "Cycling", description: "A low-impact exercise for stamina and leg strength.", image: Cycling },
            { name: "Jump Rope", description: "A full-body cardio exercise.", image: JumpRope },
        ],
    },
    3: {
        name: 'Flexibility',
        description: "Flexibility training involves stretching and yoga exercises to improve range of motion, reduce stiffness, and promote relaxation.",
        image: Flexibility,
        exercises: [
            { name: "Hamstring Stretch", description: "Targets the back of the thighs.", image: HamstringStretch },
            { name: "Shoulder Stretch", description: "Improves shoulder flexibility.", image: ShoulderStretch },
            { name: "Yoga Poses", description: "Enhances full-body flexibility.", image: YogaPoses },
        ],
    },
    4: {
        name: 'High-Intensity Interval Training (HIIT)',
        description: "HIIT combines short bursts of intense activity with rest periods, maximizing calorie burn and improving fitness in less time.",
        image: HIIT,
        exercises: [
            { name: "Burpees", description: "A full-body exercise to boost heart rate.", image: Burpees },
            { name: "Sprint Intervals", description: "Short bursts of running at high speed.", image: SprintIntervals },
            { name: "Mountain Climbers", description: "A core and cardio-intensive move.", image: MountainClimbers },
        ],
    },
};

const WorkoutPlanDetail = () => {
    const { id } = useParams();
    const workout = workoutDetails[id];

    if (!workout) {
        return <div className="text-center text-lg font-bold">Workout Plan Not Found</div>;
    }

    return (
        <div className="mt-16 p-4">
            <h1 className="text-3xl font-bold text-center">{workout.name}</h1>
            <div className="flex flex-col items-center mt-6">
                <img src={workout.image} alt={workout.name} className="w-96 h-64 object-cover mb-4" />
                <p className="text-lg text-gray-700 text-justify">{workout.description}</p>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {workout.exercises.map((exercise, index) => (
                    <div key={index} className="max-w-sm rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-4">
                            <img src={exercise.image} alt={exercise.name} className="w-full h-[200px] object-cover rounded-lg" />
                            <h3 className="text-lg font-bold text-gray-800 mt-4">{exercise.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">{exercise.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkoutPlanDetail;
