import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import FitnessJourney from "../assest/Blogs/Fitness_Journey.png";
import Top5_Exercises from "../assest/Blogs/Top5_Exercises.png";
import Nutrition_Tips from "../assest/Blogs/Nutrition_Tips.png";

const blogPosts = [
  {
    id: 1,
    image: FitnessJourney,
    title: "How to Stay Motivated on Your Fitness Journey",
    subtitle: "Creating healthy habits",
    description: "Explore effective strategies to maintain motivation and achieve your fitness goals.",
    tag: "Motivation",
  },
  {
    id: 2,
    image: Top5_Exercises,
    title: "Top 5 Exercises for Beginners",
    subtitle: "Fitness Made Simple",
    description: "Discover beginner-friendly exercises to kickstart your fitness journey.",
    tag: "Beginner Tips",
  },
  {
    id: 3,
    image: Nutrition_Tips,
    title: "Nutrition Tips for a Healthy Lifestyle",
    subtitle: "Fuel Your Body",
    description: "Learn the basics of nutrition to complement your fitness routine.",
    tag: "Nutrition",
  },
];

const Blog = () => {
  return (
    <div className="mt-16 p-4">
    <h1 className="text-3xl font-bold mb-6 text-center">Our Fitness Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            subtitle={post.subtitle}
            description={post.description}
            tag={post.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
