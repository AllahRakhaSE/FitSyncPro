import { useState } from 'react';
import PropTypes from 'prop-types';

function WhyChooseUs() {
    const [hoveredImage, setHoveredImage] = useState(null);

    const ImageFigure = ({ src, alt, caption, span = false }) => (
        <figure className={`text-center ${span ? "md:col-span-2" : ""}`}>
            <img
                src={src}
                alt={alt}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-auto rounded-md cursor-pointer transition-transform hover:scale-105"
                onMouseEnter={() => setHoveredImage(src)}
                onTouchStart={() => setHoveredImage(src)}
                loading="lazy"
            />
            <figcaption className="mt-1 md:mt-2 text-white text-xs sm:text-sm md:text-base">{caption}</figcaption>
        </figure>
    );

    return (
        <div className="w-full py-8 md:py-12 bg-red-500 font-serif relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-white">
                    Why Choose <span className="text-black">FitSync Pro</span>?
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Apple Section */}
                    <div className="p-3 sm:p-4 text-center border-b-2 md:border-b-0 md:border-r-2 border-white/30">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-white">Apple</h2>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            <ImageFigure src="/images/b1.jpg" alt="Better Battery" caption="Better Battery" />
                            <ImageFigure src="/images/lc1.jpeg" alt="Cost Effective" caption="Cost Effective" />
                            <ImageFigure src="/images/si1.jpeg" alt="Seamless Integration" caption="Seamless Integration" />
                            <ImageFigure src="/images/p1.jpeg" alt="Best Performance" caption="Best Performance" />
                        </div>
                    </div>

                    {/* Fitbit Section */}
                    <div className="p-3 sm:p-4 text-center border-b-2 md:border-b-0 md:border-r-2 border-white/30">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-white">Fitbit</h2>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            <ImageFigure src="/images/lc1.jpeg" alt="Cost Effective" caption="Cost Effective" />
                            <ImageFigure src="/images/b1.jpg" alt="Better Battery" caption="Better Battery" />
                            <ImageFigure src="/images/p1.jpeg" alt="Best Performance" caption="Best Performance" span />
                        </div>
                    </div>

                    {/* Samsung Section */}
                    <div className="p-3 sm:p-4 text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-white">Samsung</h2>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            <ImageFigure src="/images/si1.jpeg" alt="Seamless Integration" caption="Seamless Integration" />
                            <ImageFigure src="/images/lc1.jpeg" alt="Cost Effective" caption="Cost Effective" />
                            <ImageFigure src="/images/b1.jpg" alt="Better Battery" caption="Better Battery" />
                            <ImageFigure src="/images/p1.jpeg" alt="Best Performance" caption="Best Performance" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Image */}
            {hoveredImage && (
                <div
                    className="fixed inset-0 w-full h-full bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setHoveredImage(null)} 
                >
                    <div className="relative max-w-4xl w-full">
                        <button 
                            className="absolute -top-10 right-0 text-white text-2xl"
                            onClick={() => setHoveredImage(null)}
                            aria-label="Close image"
                        >
                            ×
                        </button>
                        <img
                            src={hoveredImage}
                            alt="Fullscreen"
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

WhyChooseUs.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    caption: PropTypes.string,
    span: PropTypes.bool,
};

export default WhyChooseUs;