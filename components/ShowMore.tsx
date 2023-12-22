'use client'


import { CustomButton } from '@/components'
import { ShowMoreProps } from '@/types/types'
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";


const ShowMore = ({pageNumber, isNext } : ShowMoreProps) => {

    const Router = useRouter();

    const handleNavigation = () => {
        console.log('Show more Clicked')
        const newLimit = (pageNumber + 1) * 10;
        
        const newPathname = updateSearchParams("limit", `${newLimit}`);
    
        Router.push(newPathname);
    }

    return (
        <div className='w-full flex justify-center items-center mt-10 '>
            {
                !isNext && (
                    <CustomButton
                        title='Show More'
                        btnType='button'
                        containerStyles='bg-primary-blue rounded-full text-white hover:bg-blue-500'
                        handleClick={handleNavigation}
                    />
                )
            }
        </div>
    )
}


export default ShowMore;