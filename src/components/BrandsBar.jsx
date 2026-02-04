import React from "react";
import noirva from "../assets/Vector.png";
import urbx from "../assets/Group.png";
import elan from "../assets/gucci.png";
import rawstate from "../assets/zara.png";
import prada from "../assets/prada.png";

/**
 * BrandsBar Component
 * 
 * A dark bar displaying partner brand logos.
 */
function BrandsBar() {
    const brands = [
        { name: "Versace", src: noirva },
        { name: "Zara", src: rawstate },
        { name: "Gucci", src: elan },
        { name: "Prada", src: prada },
        { name: "Calvin Klein", src: urbx }
    ];

    return (
        <div className="bg-black w-full py-6 md:py-10">
            <div className="max-w-[1240px] mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
                {brands.map((brand, index) => (
                    <img
                        key={index}
                        src={brand.src}
                        alt={brand.name}
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain brightness-0 invert opacity-100 transition-opacity hover:opacity-70 cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
}

export default BrandsBar;
