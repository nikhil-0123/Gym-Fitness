import React from 'react';

const PricingPlan = () => {
  return (
    <div className="mt-16 p-4">
      <h1 className="text-4xl font-bold text-center mb-10">Pricing Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="p-6 border rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
          <p className="text-gray-600 mb-6">Perfect for beginners just starting their fitness journey.</p>
          <p className="text-4xl font-bold text-indigo-500 mb-4">$19.99</p>
          <p className="text-gray-600 mb-6">per month</p>
          <ul className="text-left mb-6 space-y-2">
            <li>- Access to gym equipment</li>
            <li>- Free group classes</li>
            <li>- Basic fitness tracking</li>
          </ul>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">Choose Plan</button>
        </div>

        {/* Standard Plan */}
        <div className="p-6 border rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Standard Plan</h2>
          <p className="text-gray-600 mb-6">For those who are serious about their fitness goals.</p>
          <p className="text-4xl font-bold text-indigo-500 mb-4">$49.99</p>
          <p className="text-gray-600 mb-6">per month</p>
          <ul className="text-left mb-6 space-y-2">
            <li>- Everything in Basic Plan</li>
            <li>- Advanced fitness tracking</li>
            <li>- Personal training sessions</li>
            <li>- Diet consultation</li>
          </ul>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">Choose Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="p-6 border rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
          <p className="text-gray-600 mb-6">For fitness enthusiasts seeking the ultimate experience.</p>
          <p className="text-4xl font-bold text-indigo-500 mb-4">$99.99</p>
          <p className="text-gray-600 mb-6">per month</p>
          <ul className="text-left mb-6 space-y-2">
            <li>- Everything in Standard Plan</li>
            <li>- Unlimited personal training</li>
            <li>- Customized workout plans</li>
            <li>- Exclusive gym access</li>
          </ul>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
