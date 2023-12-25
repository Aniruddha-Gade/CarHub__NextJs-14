"use client"

import React, { useState, useEffect } from 'react';
// import { useState } from "react";

import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types'


// skeleton body
const SkeletonTemplate = () => {
  return (
    <div className='flex flex-col p-6 justify-center items-start bg-primary-blue-100 rounded-3xl '>
      <h2 className='h-5 w-16 rounded-xl skeleton'></h2>
      <h2 className='h-32 w-[80%] mt-2 rounded-xl skeleton'></h2>
      <div className='w-full flex justify-between items-center gap-5 '>
        <div className='h-10 w-16 mt-2 rounded-xl skeleton'></div>
        <div className='h-10 w-16 mt-2 rounded-xl skeleton'></div>
        <div className='h-10 w-16 mt-2 rounded-xl skeleton'></div>
      </div>
    </div>
  )
}



export default function Home({ searchParams }: HomeProps) {


  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const result = await fetchCars({
          manufacturer: searchParams.manufacturer || '',
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || '',
          limit: searchParams.limit || 10,
          model: searchParams.model || '',
        });

        
        // temp data 
        // const result = [
        //   {
        //     "city_mpg": 19,
        //     "class": "minivan",
        //     "combination_mpg": 22,
        //     "cylinders": 6,
        //     "displacement": 3.5,
        //     "drive": "fwd",
        //     "fuel_type": "gas",
        //     "highway_mpg": 28,
        //     "make": "honda",
        //     "model": "odyssey",
        //     "transmission": "a",
        //     "year": 2022
        //   },
        //   {
        //     "city_mpg": 21,
        //     "class": "midsize car",
        //     "combination_mpg": 24,
        //     "cylinders": 4,
        //     "displacement": 2.5,
        //     "drive": "awd",
        //     "fuel_type": "gas",
        //     "highway_mpg": 29,
        //     "make": "kia",
        //     "model": "stinger awd",
        //     "transmission": "a",
        //     "year": 2022
        //   },
        //   {
        //     "city_mpg": 22,
        //     "class": "midsize car",
        //     "combination_mpg": 25,
        //     "cylinders": 4,
        //     "displacement": 2.5,
        //     "drive": "rwd",
        //     "fuel_type": "gas",
        //     "highway_mpg": 32,
        //     "make": "kia",
        //     "model": "stinger rwd",
        //     "transmission": "a",
        //     "year": 2022
        //   },
        //   {
        //     "city_mpg": 17,
        //     "class": "midsize car",
        //     "combination_mpg": 20,
        //     "cylinders": 6,
        //     "displacement": 3.3,
        //     "drive": "awd",
        //     "fuel_type": "gas",
        //     "highway_mpg": 24,
        //     "make": "kia",
        //     "model": "stinger awd",
        //     "transmission": "a",
        //     "year": 2022
        //   },
        //   {
        //     "city_mpg": 18,
        //     "class": "midsize car",
        //     "combination_mpg": 20,
        //     "cylinders": 6,
        //     "displacement": 3.3,
        //     "drive": "rwd",
        //     "fuel_type": "gas",
        //     "highway_mpg": 25,
        //     "make": "kia",
        //     "model": "stinger rwd",
        //     "transmission": "a",
        //     "year": 2022
        //   },
        // ]



        setAllCars(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);





  console.log('Car Data === ', allCars)

  return (
    <main className='overflow-hidden'>
      <Hero />


      <div className='mt-12 px-6 sm:px-16 py-4 ' id='discover'>
        <div className='flex flex-col justify-start items-start gap-y-2.5 text-black-100'>
          <h3 className='font-extrabold text-4xl'>Car Catalogue</h3>
          <p>Explore the car you might like</p>
        </div>

        {/* home filter  */}
        <div className='mt-12 w-full flex justify-between items-center gap-5 flex-wrap '>
          <SearchBar />

          {/* home filter conatainer */}
          <div className='flex justify-start items-center gap-2 flex-wrap '>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>


        {
          loading ? (
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              <SkeletonTemplate />
              <SkeletonTemplate />
              <SkeletonTemplate />
              <SkeletonTemplate />
              <SkeletonTemplate />
            </div>
          )
            :
            allCars && allCars.length > 0 ? (
              <section>
                <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                  {allCars.map((car, ind) => (
                    <CarCard car={car} key={ind} />
                  ))}
                </div>

                <ShowMore
                  pageNumber={(searchParams.limit || 10) / 10}
                  isNext={(searchParams.limit || 10) > allCars.length}
                />
              </section>)
              : (
                <div className='mt-16 flex justify-center items-center flex-col gap-2;'>
                  <p className='text-xl text-bold text-black'>Oops, no results found...!</p>
                </div>
              )
        }
      </div>


    </main>
  )
}
