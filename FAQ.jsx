import { useState } from "react";

function FAQ() {
    const sections = [
      {
        title: "What is FitSync Pro?",
        content:
          "FitSync Pro is a smart fitness tracking application designed to help you monitor and improve your workouts effectively.",
      },
      {
        title: "How does FitSync Pro work?",
        content:
          "It syncs with your wearable devices to track your heart rate, steps, calories burned, and sleep patterns in real-time.",
      },
      {
        title: "Is FitSync Pro compatible with all smartwatches?",
        content:
          "Yes, it is compatible with most popular smartwatch brands, including Apple, Fitbit, and Samsung.",
      },
      {
        title: "Is there a free trial available?",
        content:
          "Yes, we offer a 14-day free trial with access to all premium features.",
      },
      {
        title: "Can I use FitSync Pro without a smartwatch?",
        content:
          "Yes, you can manually log your workouts and progress in the app without a smartwatch.",
      },
      {
        title: "How do I contact support?",
        content:
          "You can contact our support team via email at support@fitsyncpro.com or through the in-app chat feature.",
      },
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="w-full bg-red-500 font-serif py-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-white font-bold text-3xl sm:text-4xl text-center mb-6 sm:mb-8">FAQ&apos;s</h1>
        
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="mb-3 sm:mb-4 border rounded-lg overflow-hidden">
              <button
                className={`w-full flex justify-between items-center bg-white text-gray-800 text-base sm:text-lg md:text-xl font-bold p-3 sm:p-4 text-left transition duration-300 ${
                  activeIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
                <span className="text-xl sm:text-2xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen p-3 sm:p-4" : "max-h-0"
                }`}
              >
                <p className="text-white text-base sm:text-lg md:text-xl">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FAQ;