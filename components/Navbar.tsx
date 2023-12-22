'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {

    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src='/logo.svg'
                        width={118}
                        height={18}
                        className='object-contain'
                        alt='car hub'
                    />
                </Link>

                <CustomButton
                    title='Sign In'
                    btnType='button'
                    handleClick={() => { }}
                    containerStyles='text-primary-blue bg-white rounded-full min-w-[130px] '
                />
            </nav>


        </header>

    )
}

export default Navbar