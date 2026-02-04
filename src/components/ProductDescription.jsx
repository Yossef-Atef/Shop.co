import React, { useState, useEffect } from "react";

/**
 * Reviews Component (formerly ProductDescription)
 * 
 * A responsive carousel of customer testimonials.
 */
const reviews = [
    {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        verified: true,
    },
    {
        id: 2,
        name: "Alex K.",
        rating: 5,
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        verified: true,
    },
    {
        id: 3,
        name: "James L.",
        rating: 5,
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        verified: true,
    },
    {
        id: 4,
        name: "Mooee K.",
        rating: 5,
        text: "The customer service was exceptional, and the delivery was faster than expected. I love the fit and feel of the fabrics used in their collection.",
        verified: true,
    },
    {
        id: 5,
        name: "Samantha D.",
        rating: 5,
        text: "I highly recommend Shop.co to anyone looking for high-quality fashion at affordable prices. The shopping experience was seamless from start to finish.",
        verified: true,
    }
];

function ProductDescription() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    // Dynamic items per slide based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (currentIndex < reviews.length - itemsToShow) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className="max-w-[1240px] mx-auto px-4 py-8 md:py-16 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-end mb-8 md:mb-10">
                <h2 className="text-3xl md:text-[48px] font-black uppercase tracking-tighter">
                    OUR HAPPY CUSTOMERS
                </h2>
                <div className="flex gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`transition-opacity ${currentIndex === 0 ? 'opacity-30' : 'opacity-100 hover:scale-110'}`}
                        aria-label="Previous reviews"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= reviews.length - itemsToShow}
                        className={`transition-opacity ${currentIndex >= reviews.length - itemsToShow ? 'opacity-30' : 'opacity-100 hover:scale-110'}`}
                        aria-label="Next reviews"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div
                    className="flex gap-4 md:gap-5 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className={`flex flex-col gap-3 md:gap-4 p-6 md:p-8 rounded-[20px] border border-black/10 shrink-0`}
                            style={{ width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 20 / itemsToShow}px)` }}
                        >
                            {/* Stars */}
                            <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#FFC633]" viewBox="0 0 22 22">
                                        <path d="M11 1.5L14.09 7.76L21 8.77L16 13.64L17.18 20.5L11 17.27L4.82 20.5L6 13.64L1 8.77L7.91 7.76L11 1.5Z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Name with Verified Badge */}
                            <div className="flex items-center gap-2">
                                <span className="text-lg md:text-xl font-bold">{review.name}</span>
                                {review.verified && (
                                    <div className="bg-[#01AB31] rounded-full p-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-black/60 text-sm md:text-base leading-relaxed italic">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductDescription;