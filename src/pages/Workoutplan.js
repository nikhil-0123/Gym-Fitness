import React from "react";
import WorkoutPlanCard from "../components/WorkoutPlan/WorkoutPlanCard";
import StrengthTraining from "../assest/workout/StrengthTraining.png";
import Cardio from "../assest/workout/Cardio.png";
import Flexibility from "../assest/workout/Flexibility.png";
import HIIT from "../assest/workout/HIIT.png";

const Workout_plain = [
    {
        id: 1,
        name: 'Strength Training',
        summary: "Strength training focuses on improving muscle strength and endurance by using resistance such as weights, resistance bands, or body weight.",
        image: StrengthTraining,
    },
    {
        id: 2,
        name: 'Cardio',
        summary: "Cardio workouts focus on increasing your heart rate to improve cardiovascular health, endurance, and overall fitness through activities like running, cycling, or swimming.",
        image: Cardio,
    },
    {
        id: 3,
        name: 'Flexibility',
        summary: "Flexibility training includes stretching exercises designed to improve the range of motion of muscles and joints, reducing stiffness and improving overall mobility.",
        image: Flexibility,
    },
    {
        id: 4,
        name: 'High-Intensity Interval Training (HIIT)',
        summary: "HIIT involves alternating between short bursts of intense activity and periods of rest or low-intensity exercises, maximizing calorie burn and improving endurance in a short time.",
        image: HIIT,
    },
];

const WorkoutPlan = () => {
    return (
        <div className="mt-16 ml-10 p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Workout Plan</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Workout_plain.map((workout) => (
                    <WorkoutPlanCard
                        key={workout.id}
                        id={workout.id}
                        name={workout.name}
                        summary={workout.summary}
                        image={workout.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkoutPlan;
