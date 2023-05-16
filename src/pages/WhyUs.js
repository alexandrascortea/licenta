import React from 'react';
import { Link } from 'react-router-dom';


const WhyUs = () => {
  return (
    <div className="bg-mountains bg-cover bg-center h-screen relative flex justify-center items-center">
      <div className="container mx-auto mt-10">
        <h1 className="font-primary text-4xl md:text-6xl lg:text-7xl font-bold mb-5 text-center">Why Choose Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="mb-8 md:mb-0 lg:mb-0">
            <h2 className="font-primary text-2xl md:text-3xl lg:text-4xl mb-4 font-bold">Unparalleled Location</h2>
            <p className="font-primary text-xl md:text-2xl lg:text-3xl mb-4">
              Our pension is nestled near the magnificent Castle Bran, surrounded by breathtaking mountains. Immerse yourself in the stunning natural beauty that surrounds us.
            </p>
            <p className="font-primary text-xl md:text-2xl lg:text-3xl mb-4">
              Explore the picturesque trails, indulge in outdoor activities, and soak in the tranquility of the mountainous landscape. A paradise for nature enthusiasts and adventurers alike.
            </p>
            <Link
              to="/activities"
              className="bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg px-6 py-2 inline-block"
            >
              Discover Activities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
