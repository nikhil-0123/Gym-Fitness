import React from "react";
import { useParams } from "react-router-dom";
import WeightLoss from "../../assest/dietPlan/WeightLoss.png";
import WeightGain from "../../assest/dietPlan/WeightGain.png";
import Maintenance from "../../assest/dietPlan/Maintenance.png";
import Vegan from "../../assest/dietPlan/Vegan.png";
import FatLoss from "../../assest/dietPlan/FatLoss.png";
import GrilledChicken from "../../assest/dietPlan/GrilledChicken.png";
import Quinoa from "../../assest/dietPlan/Quinoa.png";
import SteamedVegetables from "../../assest/dietPlan/SteamedVegetables.png";
import PeanutButter from "../../assest/dietPlan/PeanutButter.png";
import WholeMilk from "../../assest/dietPlan/WholeMilk.png";
import Avocado from "../../assest/dietPlan/Avocado.png";
import BrownRice from "../../assest/dietPlan/BrownRice.png";
import GrilledFish from "../../assest/dietPlan/GrilledFish.png";
import SaladOlive from "../../assest/dietPlan/SaladOlive.png";
import Tofu from "../../assest/dietPlan/Tofu.png";
import Chickpeas from "../../assest/dietPlan/Chickpeas.png";
import AlmondMilk from "../../assest/dietPlan/AlmondMilk.png";
import EggWhites from "../../assest/dietPlan/EggWhites.png";
import Spinach from "../../assest/dietPlan/Spinach.png";
import SweetPotatoes from "../../assest/dietPlan/SweetPotatoes.png";

const dietDetails = {
    1: {
        name: 'Weight Loss',
        description: "A weight gain diet plan typically focuses on consuming a calorie-surplus diet rich in whole foods like fruits, vegetables, lean protein, and whole grains, while limiting processed foods, sugary drinks, and excessive saturated fat. A weight loss diet plan should be well-balanced, nutritious, and sustainable. It typically combines healthy eating, portion control, and regular physical activity. Here's a basic diet plan that you can tailor to your preferences and lifestyle. Always consider consulting a healthcare provider or nutritionist before starting any weight loss program to ensure it aligns with your individual health needs.",
        image: WeightLoss,
        items: [
            { name: "Grilled Chicken", description: "Lean protein source to build muscles.", image: GrilledChicken },
            { name: "Quinoa", description: "A whole grain high in protein and fiber.", image: Quinoa },
            { name: "Steamed Vegetables", description: "Rich in vitamins and low in calories.", image: SteamedVegetables },
        ],
    },
    2: {
        name: 'Weight Gain',
        description: "A weight gain diet plan typically focuses on consuming a calorie-surplus diet rich in whole foods like fruits, vegetables, lean protein, and whole grains, while limiting processed foods, sugary drinks, and excessive saturated fat.",
        image: WeightGain,
        items: [
            { name: "Peanut Butter", description: "A calorie-dense source of healthy fats.", image: PeanutButter },
            { name: "Whole Milk", description: "Rich in calories, protein, and calcium.", image: WholeMilk },
            { name: "Avocado", description: "High in healthy fats and nutrients.", image: Avocado },
        ],
    },
    3: {
        name: 'Maintenance',
        description: "A maintenance diet plan typically focuses on consuming a balanced diet rich in whole foods like fruits, vegetables, lean protein, and whole grains, while limiting processed foods, sugary drinks, and excessive saturated fat.",
        image: Maintenance,
        items: [
            { name: "Brown Rice", description: "A balanced carb source for daily energy.", image: BrownRice },
            { name: "Grilled Fish", description: "A lean protein option rich in omega-3.", image: GrilledFish },
            { name: "Salad with Olive Oil", description: "A healthy mix of greens and fats.", image: SaladOlive },
        ],
    },
    4: {
        name: 'Vegan Diet Plan',
        description: "A vegan diet plan typically focuses on consuming plant-based foods like fruits, vegetables, lean protein sources, and whole grains, while limiting animal products.",
        image: Vegan,
        items: [
            { name: "Tofu", description: "A versatile plant-based protein.", image: Tofu },
            { name: "Chickpeas", description: "Rich in protein and fiber.", image: Chickpeas },
            { name: "Almond Milk", description: "A dairy-free calcium source.", image: AlmondMilk },
        ],
    },
    5: {
        name: 'Fat Loss',
        description: "A fat loss diet plan typically focuses on consuming a balanced diet rich in whole foods like fruits, vegetables, lean protein, and whole grains, while limiting processed foods, sugary drinks, and excessive saturated fat.",
        image: FatLoss,
        items: [
            { name: "Egg Whites", description: "Low-calorie protein source.", image: EggWhites },
            { name: "Spinach", description: "Nutrient-dense and low in calories.", image: Spinach },
            { name: "Sweet Potatoes", description: "A carb source with a low glycemic index.", image: SweetPotatoes },
        ],
    },
};

const DietPlanDetail = () => {
    const { id } = useParams();
    const dietPlan = dietDetails[id];

    if (!dietPlan) {
        return <div className="text-center text-lg font-bold">Diet Plan Not Found</div>;
    }

    return (
        <div className="mt-16 p-4">
            <h1 className="text-3xl font-bold text-center">{dietPlan.name}</h1>
            <div className="flex flex-row items-center m-auto mt-6 w-[80%]">
                <p className="text-lg text-gray-700 text-justify">{dietPlan.description}</p>
                <img src={dietPlan.image} alt={dietPlan.name} className="w-[40%] h-[35%] object-cover mb-4" />
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Items in this Plan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center m-auto items-center gap-6 w-[80%]">
                {dietPlan.items.map((item, index) => (
                    <div key={index} className="max-w-sm rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-4">
                            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-lg" />
                            <h3 className="text-lg font-bold text-gray-800 mt-4">{item.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DietPlanDetail;
