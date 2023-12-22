'use client'

import React, { useState } from 'react'
import { SearchManufacturer } from '@/components'
import Image from 'next/image'
import { useRouter } from "next/navigation";


const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
        <button
            type='submit'
            className={`-ml-3 z-10 ${otherClasses} `}
        >
            <Image
                src='/magnifying-glass.svg'
                alt='magnifying glass'
                width={40}
                height={40}
                className='object-contain'
            />
        </button>
    )
}



const SearchBar = () => {

    const [manufacturer, setManuFacturer] = useState("");
    const [model, setModel] = useState("");
    const Router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (manufacturer.trim() === "" && model.trim() === "") {
          return alert("Please provide some input");
        }
    
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
      };

 
      const updateSearchParams = (model: string, manufacturer: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);
    
        // Update or delete the 'model' search parameter based on the 'model' value
        if (model) {
          searchParams.set("model", model);
        } else {
          searchParams.delete("model");
        }
    
        // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
        if (manufacturer) {
          searchParams.set("manufacturer", manufacturer);
        } else {
           searchParams.delete("manufacturer");
        }
    
        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    
        Router.push(newPathname);
      };




    return (
        <form
            className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'
            onSubmit={handleSearch}
        >
            <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManuFacturer={setManuFacturer}
                />
                <SearchButton
                    otherClasses='sm:hidden'
                />
            </div>

            <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
                <Image
                    src='/model-icon.png'
                    alt='car model-icon'
                    className='absolute w-[20px] h-[20px] ml-4 '
                    width={25}
                    height={25}
                />
                <input
                    onChange={(e) => setModel(e.target.value)}
                    value={model}
                    type='text'
                    name='searchModel'
                    placeholder='Tigaun'
                    className='w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm'
                />
                <SearchButton otherClasses='sm:hidden ' />
            </div>

            <SearchButton otherClasses='max-sm:hidden' />

        </form>
    )
}

export default SearchBar;