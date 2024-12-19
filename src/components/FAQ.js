import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I log my workouts?",
      answer: "You can log your workouts through the 'Log Workout' section in the app where you can enter your exercise details."
    },
    {
      question: "Can I track my calories burned?",
      answer: "Yes, the app tracks calories burned during each workout and provides detailed reports on your progress."
    },
    {
      question: "Is this application suitable for beginners?",
      answer: "Yes, the application is designed for all levels. Beginners can start with easy routines and progress at their own pace."
    },
    {
      question: "What features does the application offer?",
      answer: "The application offers workout logging, progress tracking, calorie monitoring, workout routines, and more."
    },
    {
      question: "How can I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password' to receive a reset link."
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mt-4 mb-4 mx-auto p-6 border-2 border-zinc-400 rounded-md">
      <h2 className="text-2xl font-semibold text-green-600 mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-2 text-lg font-medium text-gray-800 hover:text-green-600 focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="py-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
