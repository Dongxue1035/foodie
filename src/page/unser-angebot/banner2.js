
import React from 'react';

const Highlights = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-xl font-semibold text-orange-600 uppercase mb-4">SmartFoodie Highlights</h2>
      <h3 className="text-3xl font-bold text-gray-900 mb-4">What makes our SmartFoodie so special?</h3>
      <p className="text-gray-700 mb-12 mx-auto max-w-xl">
        SmartFoodie stands for more than just healthy nutrition in the workplace. We stand for innovation, sustainability and an individual offer for every industry and every company: the ideal catering for everyone. See your benefits here:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
        <div className="bg-[#F7ECEC] min-h-[600px] flex flex-col rounded-lg p-6">
          <img
            src="/14.png" // Replace with actual image path
            alt="Our Food"
            className="rounded-t-lg w-full h-80 object-cover mb-4"
          />
          <h4 className="text-2xl font-bold text-gray-800 mb-2">Our Food</h4>
          <ul className="text-left text-gray-700 space-y-2">
            <li>✓ Extremely fresh thanks to our regional partners: dean&david, Planted, BettaFish and many more</li>
            <li>✓ +100 main courses</li>
            <li>✓ Vegan, vegetarian, Italian, Asian & hearty classics</li>
          </ul>
        </div>

        <div className="bg-[#d7e6f3] min-h-[500px] flex flex-col rounded-lg p-6">
          <img
            src="/APP.png" // Replace with actual image path
            alt="Our Innovation"
            className="rounded-t-lg w-full h-80 object-cover mb-4"
          />
          <h4 className="text-2xl font-bold text-gray-800 mb-2">Our Innovation</h4>
          <ul className="text-left text-gray-700 space-y-2">
            <li>✓ AI forecasting to reduce food waste</li>
            <li>✓ Smart vending machines, with touchscreens & a closed goods system</li>
            <li>✓ Reserve, redeem subsidy, order & pay via app</li>
          </ul>
        </div>

        <div className="bg-[#fdf0d4]  min-h-[500px] flex flex-col rounded-lg p-6">
          <img
            src="/1.png" // Replace with actual image path
            alt="Our Offer"
            className="rounded-t-lg w-full h-80 object-cover mb-4"
          />
          <h4 className="text-2xl font-bold text-gray-800 mb-2">Our Offer</h4>
          <ul className="text-left text-gray-700 space-y-2">
            <li>✓ An ideal catering solution for every workplace</li>
            <li>✓ Tasting package & 3-month trial period, before committing to a long-term contract</li>
            <li>✓ Cost-effective and holistic catering, with the added benefit of subsidisation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
