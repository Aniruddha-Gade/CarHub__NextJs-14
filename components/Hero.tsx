'use client'

import React from "react";
import Image from 'next/image'
import CustomButton from "./CustomButton";


const handleScroll = () => {
  const nextSection = document.getElementById("discover");

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}



const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="font-extrabold text-[30px] sm:text-[44px] 2xl:text-[72px] ">
          Find , book or rent a car - quickly and easily
        </h1>

        <p className="mt-5 font-light text-[19px] md:text-[23px] text-black-100 ">
          Streamline your car rental experience with effortless booking process
        </p>

        <CustomButton
          title="Explore cars"
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>

      {/* hero image container */}
      <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
        {/* hero image */}
        <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
          <Image
            src='/hero.png'
            alt='hero'
            fill
            className='object-contain'
          />
        </div>

        {/* background image */}
        <div className='absolute xl:-top-14 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden '></div>
      </div>

    </div>
  );
};

export default Hero;
