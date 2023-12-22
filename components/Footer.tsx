import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/constants'


const Footer = () => {
    return (
        <footer className='flex flex-col mt-5 border-t border-gray-100 text-black-100'>
            <div className='flex justify-between max-md:flex-col gap-5 px-6 sm:px-16 py-10 flex-wrap '>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image
                        src='/logo.svg'
                        width={118}
                        height={18}
                        className='object-contain'
                        alt='carHub'
                    />
                    <p className='text-base text-gray-700'>CarHub 2024 <br /> All Right Reversed &copy;</p>
                </div>

                {/* Footer links */}
                <div className='flex flex-wrap max-md:mt-10 gap-20 flex-1 md:justify-end'>
                    {
                        footerLinks.map((item) => (
                            <div key={item.title}
                                className='flex flex-col gap-3 text-base min-w-[170px]'
                            >
                                <p className='font-bold'>{item.title}</p>
                                {
                                    item.links.map((link) => (
                                        <Link
                                            href={link.url}
                                            key={link.title}
                                            className='text-gray-500 hover:text-primary-blue hover:underline duration-300'
                                        >
                                            {link.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* last row */}
            <div className='flex flex-col sm:flex-row justify-between items-center flex-wrap border-t border-gray-100 px-6 sm:px-16 py-10'>
                <p>@2024 CarHub. All Right Reversed</p>

                <div className='flex-1 flex  sm:justify-end justify-center max-sm:mt-4 gap-10 text-gray-500'>
                    <Link href='/' className='hover:text-primary-blue hover:underline'>Privacy</Link>
                    <Link href='/' className='hover:text-primary-blue hover:underline'>Terms of Use</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer