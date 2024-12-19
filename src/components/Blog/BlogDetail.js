import React from "react";
import { useParams } from "react-router-dom";
import FitnessJourney from "../../assest/Blogs/Fitness_Journey.png";
import Top5_Exercises from "../../assest/Blogs/Top5_Exercises.png";
import Nutrition_Tips from "../../assest/Blogs/Nutrition_Tips.png";

const blogPosts = [
  {
    id: 1,
    image: FitnessJourney,
    title: "How to Stay Motivated on Your Fitness Journey",
    subtitle: "Creating healthy habits",
    content: `
      Staying motivated in your fitness journey can be challenging, but it's essential for success.
      Start by setting achievable goals, tracking your progress, and celebrating small victories.
      A fitness app can help you stay on track and focused on your goals!
    `,
  },
  {
    id: 2,
    image: Top5_Exercises,
    title: "Top 5 Exercises for Beginners",
    subtitle: "Fitness Made Simple",
    content: `
      For beginners, it's important to focus on exercises that build strength and confidence.
      Try bodyweight exercises like push-ups, squats, and planks. These are easy to learn and
      highly effective!
    `,
  },
  {
    id: 3,
    image: Nutrition_Tips,
    title: "Nutrition Tips for a Healthy Lifestyle",
    subtitle: "Fuel Your Body",
    content: `
      Nutrition is the cornerstone of a healthy lifestyle. Focus on eating whole foods, drinking
      plenty of water, and avoiding processed junk. Planning your meals can make it easier to
      stick to healthy eating habits.
    `,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
        <h1 className="text-3xl font-bold text-gray-800 mt-6">{blog.title}</h1>
        <p className="text-gray-600 mt-2">{blog.subtitle}</p>
        <div className="mt-4 text-gray-700 leading-relaxed">{blog.content}</div>
      </div>
    </div>
  );
};

export default BlogDetail;