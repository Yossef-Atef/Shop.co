import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ProductCard Component
 * 
 * Displays product information including image, title, rating, price, and discounts.
 * 
 * @param {Object} props
 * @param {number} props.id - Product ID
 * @param {string} props.image - Product image URL
 * @param {string} props.title - Product title
 * @param {number} props.rating - Product rating (0-5)
 * @param {number} props.price - Current price
 * @param {number} [props.originalPrice] - Previous price before discount
 * @param {number} [props.discount] - Discount percentage
 * @param {string} [props.description] - Product description
 */
const ProductCard = ({
    id,
    image,
    title = "Product Name",
    rating = 4.5,
    price = 100,
    originalPrice = null,
    discount = null,
    description = ""
}) => {
    // Generate star rating display
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                // Full star
                stars.push(
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            } else if (i === fullStars && hasHalfStar) {
                // Half star
                stars.push(
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id={`half-${i}`}>
                                <stop offset="50%" stopColor="#FACC15" />
                                <stop offset="50%" stopColor="#D1D5DB" />
                            </linearGradient>
                        </defs>
                        <path fill={`url(#half-${i})`} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            } else {
                // Empty star
                stars.push(
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-gray-300" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            }
        }
        return stars;
    };

    return (
        <article className="group flex flex-col gap-2 md:gap-3 w-full animate-in fade-in duration-500">
            {/* Actionable Image Container */}
            <Link to={`/product/${id}`} className="block relative aspect-square w-full rounded-[13px] md:rounded-[20px] bg-[#F0EEED] overflow-hidden cursor-pointer">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <span className="text-gray-400 text-sm">No Image</span>
                    </div>
                )}

                {/* Optional Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-medium shadow-lg hover:bg-black hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0">
                        View Details
                    </button>
                </div>
            </Link>

            {/* Product Info */}
            <div className="flex flex-col gap-1.5 md:gap-2">
                {/* Title */}
                <Link to={`/product/${id}`}>
                    <h3 className="text-sm md:text-xl font-bold text-black line-clamp-1 group-hover:text-gray-700 transition-colors cursor-pointer">
                        {title}
                    </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="flex">
                        {renderStars()}
                    </div>
                    <span className="text-xs md:text-sm text-black font-medium">
                        {rating}/<span className="text-black/40">5</span>
                    </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center flex-wrap gap-1.5 md:gap-3">
                    <span className="text-xl md:text-2xl font-bold text-black">
                        ${price}
                    </span>
                    {originalPrice && (
                        <>
                            <span className="text-xl md:text-2xl font-bold text-black/30 line-through decoration-black/30">
                                ${originalPrice}
                            </span>
                            {discount && (
                                <span className="px-2 py-1 md:px-3 md:py-1.5 bg-[#FF3333]/10 text-[#FF3333] text-[10px] md:text-xs font-bold rounded-full">
                                    -{discount}%
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProductCard;