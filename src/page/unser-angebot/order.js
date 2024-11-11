import React from 'react';

const FoodieSteps = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-4 py-8 bg-[#d7e6f3]">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col md:w-1/3 space-y-4 text-center md:text-left md:ml-20">
        <h2 className="text-xs font-semibold text-gray-700 uppercase tracking-widest">How it works</h2>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          From ordering to the first bite.
        </h1>
        <p className="text-lg text-gray-600">
          Save time every day with Foodie.
        </p>
        <button className="bg-[#f28b50] hover:bg-blue-200 text-white  py-2 px-4 rounded-full font-semibold transition">
          Arrange an initial meeting
        </button>
      </div>

      {/* Right Side: Steps */}
      <div className="flex flex-col md:ml-20 space-y-4">
        {[{
          number: "01",
          image: "step1.png",
          description: "Order/reserve via the Foodie app, or via the Foodie touchscreen"
        },
        {
          number: "02",
          image: "step2.png",
          description: "Collect your chosen items from the Foodie"
        },
        {
          number: "03",
          image: "1.jpg",
          description: "Have you ordered a hot main course? Pop it in the microwave and warm it up"
        },
        {
          number: "04",
          image: "85.png",
          description: "Enjoy your food."
        }].map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Step Number */}
            <div className="flex items-center justify-center w-10 h-10 bg-[#f28b50] text-white rounded-full font-semibold text-lg">
              {step.number}
            </div>

            {/* Step Content */}
            <div className="flex flex-col md:flex-row bg-yellow-50 rounded-lg shadow p-4 space-y-2 md:space-y-0 md:space-x-4">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="w-24 h-30 object-cover rounded"
              />
              <p className="text-black-800">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodieSteps;
