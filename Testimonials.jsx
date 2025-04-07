"use client";
import { motion } from "framer-motion";

const testimonials = [
    {
        img: "/images/T3.webp",
        text: "FitSync Pro has completely changed the way I track my fitness. The seamless integration with my smartwatch and the accurate health insights are game-changers!",
        name: "Emily R., Fitness Enthusiast",
        rating: 4.0,
    },
    {
        img: "/images/T2.webp",
        text: "I was skeptical at first, but after using FitSync Pro for a month, I can confidently say it's the best investment for my health. The UI is smooth, and the battery life is incredible!",
        name: "James K., Tech Blogger",
        rating: 3.5,
    },
    {
        img: "/images/T1.webp",
        text: "The cost-effectiveness of FitSync Pro compared to other premium brands is unmatched. Highly recommended for anyone serious about their fitness journey!",
        name: "Michael T., Health Coach",
        rating: 4.5,
    },
    {
        img: "/images/T4.jpeg",
        text: "I've tried multiple fitness tracking apps, but nothing comes close to the accuracy and performance of FitSync Pro. Love how easily it syncs with all my devices!",
        name: "Sophia M., Personal Trainer",
        rating: 5.0,
    },
    {
        img: "/images/T5.jpeg",
        text: "Best performance, best battery life, and best customer service! FitSync Pro has exceeded all my expectations. Will definitely recommend it to my friends!",
        name: "Rachel S., Professor",
        rating: 5.0,
    },
];

function Testimonials() {
    return (
        <div className="py-8 px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-serif font-bold mb-6 md:mb-8">
                Testimonials
            </h1>

            <div
                className="max-w-full md:max-w-[1100px] h-auto md:h-96 mx-auto overflow-x-auto overflow-y-hidden"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <motion.div
                    className="flex gap-4 sm:gap-6 w-max px-4 sm:px-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-64 sm:w-72 md:w-80 border p-4 rounded-lg bg-white shadow-md shrink-0"
                        >
                            <img
                                src={testimonial.img}
                                alt="testimonial"
                                className="w-full h-32 sm:h-40 mx-auto rounded-md object-cover"
                                loading="lazy"
                            />
                            <p className="text-xs sm:text-sm mt-2 line-clamp-4">{testimonial.text}</p>
                            <p className="font-bold text-sm sm:text-base mt-2">— {testimonial.name}</p>
                            <div className="flex text-red-500 mt-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span
                                        key={i}
                                        className={`fa ${
                                            i < Math.floor(testimonial.rating)
                                                ? "fa-star"
                                                : i === Math.floor(testimonial.rating) &&
                                                testimonial.rating % 1 !== 0
                                                ? "fa-star-half-o"
                                                : "fa-star-o"
                                        }`}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Testimonials;