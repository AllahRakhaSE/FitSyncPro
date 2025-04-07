import { useState, useEffect } from 'react';

function ProductFeatures() {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex(prev => {
      const slides = document.getElementsByClassName("mySlides");
      let newIndex = prev + n;
      if (newIndex > slides.length) newIndex = 1;
      if (newIndex < 1) newIndex = slides.length;
      return newIndex;
    });
  };

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");
        slides[i].classList.remove("block");
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" bg-gray-700", " bg-gray-300");
      }

      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.remove("hidden");
        slides[slideIndex - 1].classList.add("block");
      }

      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " bg-gray-700";
      }
    };

    showSlides();

    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <>
      <h1 className="font-bold text-3xl sm:text-4xl text-center font-serif mt-8">
        Product Features
      </h1>

      <div className="relative max-w-4xl w-full mx-auto my-8 px-4">
        {/* Slides */}
        {[1, 2, 3].map((n, index) => (
          <div key={n} className={`mySlides fade ${index === 0 ? 'block' : 'hidden'} relative`}>
            <div className="absolute top-2 left-4 text-sm sm:text-base font-semibold font-serif bg-white bg-opacity-70 px-2 py-1 rounded">
              {n} <span className="text-red-500">/</span> 3
            </div>
            <img
              src="/images/equip.jpg"
              alt={`equipment ${n}`}
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="absolute bottom-2 sm:-bottom-6 left-0 right-0 text-center text-sm sm:text-xl text-red-600 font-semibold font-serif bg-white bg-opacity-80 px-2 py-1 rounded">
              {n === 1 ? 'Major Equipments' : n === 2 ? 'Basic Equipments' : 'Necessary Equipments'}
            </div>
          </div>
        ))}

        {/* Navigation */}
        <button
          className="cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 p-3 text-white text-xl bg-black bg-opacity-60 hover:bg-opacity-80 rounded-r"
          onClick={() => plusSlides(-1)}
        >
          ❮
        </button>
        <button
          className="cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-white text-xl bg-black bg-opacity-60 hover:bg-opacity-80 rounded-l"
          onClick={() => plusSlides(1)}
        >
          ❯
        </button>
      </div>
    </>
  );
}

export default ProductFeatures;
