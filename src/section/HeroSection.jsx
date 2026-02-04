import React from "react";
import eg from "../assets/eg.jpg";
import AppButton from "../components/AppButton";
import DateText from "../components/DateText";

/**
 * HeroSection Component
 * 
 * Restored to original desktop style while maintaining mobile responsiveness.
 */
function HeroSection() {
  return (
    <div className="bg-[#F2F0F1] w-full min-h-[663px] md:h-[663px] flex flex-col md:flex-row items-start justify-start overflow-hidden">

      {/* Left Content */}
      <div className="w-full md:w-[50%] flex flex-col justify-center items-start gap-5 md:gap-7 p-6 md:p-12 md:pl-20 lg:pl-24 pt-10 md:pt-24 lg:pt-32">
        <h1 className="text-[36px] md:text-[60px] font-bold leading-[1.1] uppercase tracking-tighter md:tracking-normal">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>

        <p className="text-sm md:text-lg text-black/60 max-w-[545px]">
          Browse through our diverse range of meticulously crafted
          garments, designed to bring out your individuality
          and cater to your sense of style.
        </p>

        <div className="w-full md:w-auto mt-2">
          <AppButton />
        </div>

        <div className="w-full mt-6 md:mt-10">
          <DateText />
        </div>
      </div>


      <div className="w-full md:w-[50%] h-[400px] md:h-full">
        <img src={eg} className="w-full h-full object-contain md:object-cover object-bottom md:object-center" alt="Styles" />
      </div>

    </div>
  );
}

export default HeroSection;
