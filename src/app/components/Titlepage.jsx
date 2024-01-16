import React from 'react'
import heropage from '../../../public/heropage.jpg'
import Image from 'next/image'

const Titlepage = ({category , title , athor , date}) => {
  return (
    <aside className='w-full shadow-lg md:max-w-md bg-main px-4 py-4 space-y-6 absolute -bottom-10 md:-bottom-20  left-0 md:left-10 rounded-lg dark:bg-ter'>
        <span className='bg-skin px-2 py-1  rounded-md font-semibold capitalize'>{category}</span>
        <h3 className='text-2xl text-gray-900 font-bold dark:text-white capitalize'>{title}</h3>
        <div className='flex gap-2 items-center '>
            <div className='w-10 h-10 overflow-hidden rounded-full relative'>
            <Image 
            src={heropage}
            alt='hero image'
            fill={true}
            style={{objectFit : 'cover'}} />
            </div>
            <span className='text-sm text-[#97989F]'>{athor}</span>
            <span className='text-sm text-[#97989F]'>{date}</span>
        </div>
    </aside>
  )
}

export default Titlepage