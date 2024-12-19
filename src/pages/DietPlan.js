import DietPlanCard from "../components/DietPlan/DietPlanCard";
import WeightLoss from "../assest/dietPlan/WeightLoss.png";
import WeightGain from "../assest/dietPlan/WeightGain.png";
import Maintenance from "../assest/dietPlan/Maintenance.png";
import FatLoss from "../assest/dietPlan/FatLoss.png";
import Vegan from "../assest/dietPlan/Vegan.png"

const Diet_plain = [
    {
        id : 1,
        name : 'Weight Loss',
        summary : "A weight loss diet plan typically focuses on consuming a balanced diet rich in whole foods like fruits, vegetables, lean protein, and whole grains, while limiting processed foods, sugary drinks, and excessive saturated fat.",
        image : WeightLoss
    },
    {
        id : 2,
        name : 'Weight Gain',
        summary : "A weight gain diet plan typically focuses on consuming a calorie-surplus diet rich in whole foods like fruits, vegetables, lean protein, and whole grains, while limiting processed foods, sugary drinks, and excessive saturated fat.",
        image : WeightGain
    },
    {
        id : 3,
        name : 'Maintenance',
        summary : "A maintenance diet plan typically focuses on consuming a balanced diet rich in whole foods like fruits, vegetables, lean protein, and whole grains, while limiting processed foods, sugary drinks, and excessive saturated fat.",
        image : Maintenance
    },
    {
        id : 4,
        name : 'Vegan Diet Plan',
        summary : "A vegan diet plan typically focuses on consuming plant-based foods like fruits, vegetables,lean protein sources, and whole grains, while limiting animal products.",
        image : Vegan
    },
    {
        id : 5,
        name : 'Fat Loss',
        summary : "A fat loss diet plan typically focuses on consuming a balanced diet rich in whole foods like fruits, vegetables, lean protein, and whole grains, while limiting processed foods, sugary drinks and excessive saturated fat.",
        image : FatLoss
    },
];

const DietPlan = () => {
    return (
      <div className="mt-16 ml-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Diet Plan</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Diet_plain.map((Diet) => (
            <DietPlanCard
            key={Diet.id}
            id={Diet.id}
            name={Diet.name}
            summary={Diet.summary}
            image={Diet.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default DietPlan;