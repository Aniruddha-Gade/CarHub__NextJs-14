'use client'

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from './../types/types';




const CustomButton = ({ title, handleClick, containerStyles, btnType, textStyles, rightIcon }: CustomButtonProps) => {
    return (
        <button
            type={btnType || 'button'}
            disabled={false}
            onClick={handleClick}
            className={`flex justify-center items-center relative py-3 px-6 outline-none ${containerStyles}`}
        >
            <span className={`flex-1 ${textStyles} `}>
                {title}
            </span>

            {
                rightIcon && (
                    <div className='relative w-6 h-6'>
                        <Image
                            src={rightIcon}
                            className='object-contain  '
                            fill
                            alt='right Icon'
                        />
                    </div>
                )
            }
        </button>

    )
}

export default CustomButton