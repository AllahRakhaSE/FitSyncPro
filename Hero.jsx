import { useState } from "react";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full min-h-screen bg-red-500 relative px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif">
              Smarter Fitness, Healthier You
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-serif mt-4">
              Your journey to fitness starts here.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
              <button className="border px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg cursor-pointer hover:bg-white hover:text-red-500 font-medium sm:font-bold">
                Buy Now
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="border px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg cursor-pointer hover:bg-white hover:text-red-500 font-medium sm:font-bold"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="/images/hero.png"
              alt="hero"
              className="w-64 sm:w-80 lg:w-[360px] object-contain"
            />
          </div>
        </div>

        {/* Ratings */}
        <div className="text-center lg:text-left text-xl sm:text-2xl lg:text-3xl mt-10 font-serif font-bold">
          <span>Our Ratings:</span>&nbsp;&nbsp;
          <span className="fa fa-star text-white"></span>
          <span className="fa fa-star text-white"></span>
          <span className="fa fa-star text-white"></span>
          <span className="fa fa-star text-white"></span>
          <span className="fa fa-star"></span>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full font-serif bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full">
              <h2 className="font-bold mb-4 text-red-500 text-2xl sm:text-3xl text-center">
                Why Choose Us?
              </h2>
              <p className="text-gray-700 mb-4 text-lg sm:text-xl text-justify">
                We help you achieve your fitness goals with expert guidance, custom workouts, and motivation every step of the way.
              </p>
              <ul className="list-disc ml-5 text-gray-700 mb-4 text-lg sm:text-xl">
                <li>Certified Trainers</li>
                <li>Personalized Programs</li>
                <li>24/7 Support</li>
              </ul>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Hero;
