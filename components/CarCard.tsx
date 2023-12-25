'use client'

import React from 'react'
import { useState } from 'react'
import { CarCardProps } from './../types/types';
import { CustomButton, CarDetailsModal } from '@/components'
import Image from 'next/image';
import { calculateCarRent, generateCarImageUrl } from '@/utils';



const CarCard = ({ car }: { car: CarCardProps }) => {

  const { city_mpg, class: carClass, make, model, transmission, drive, year } = car;

  const carRent = calculateCarRent(city_mpg, year)

  const [isOpen, setIsOpen] = useState(false)



  return (
    <div className='flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group'>
      <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
        {make} {model}
      </h2>


      <p className='flex mt-6 text-[32px] font-extrabold '>
        <span className='self-start text-[14px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          className='object-contain group-hover:scale-110 duration-300'
          alt='hero logo'
        />
      </div>

      <div className='relative flex w-full mt-2 '>
        <div className='flex group-hover:invisible w-full justify-between text-gray-100'>
          <div className='flex flex-col justify-center items-center gap-2 '>
            <Image
              src='/steering-wheel.svg'
              alt='steering-wheel'
              width={20}
              height={20}
            />
            <p className='text-[14px] text-black font-semibold'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2 '>
            <Image
              src='/tire.svg'
              alt='tire'
              width={20}
              height={20}
            />
            <p className='text-[14px] text-black font-semibold '>
              {drive.toUpperCase()}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2 '>
            <Image
              src='/gas.svg'
              alt='gas'
              width={20}
              height={20}
            />
            <p className='text-[14px] text-black font-semibold'>
              {city_mpg} MPG
            </p>
          </div>
        </div>

        {/* custom button */}
        <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
          <CustomButton
            title='View More'
            containerStyles='w-full bg-primary-blue py-[16px] rounded-full '
            textStyles='text-[14px] font-bold leading-[17px] text-white '
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetailsModal
        car={car} isOpen={isOpen} closeModal={() => setIsOpen(false)}
      />
    </div>
  )
}

export default CarCard