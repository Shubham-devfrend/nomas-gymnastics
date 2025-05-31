import React from 'react'

const Head = ({title, subtitle}) => {
  return (
     <div className='flex flex-col gap-2 items-center'>
       <p className='text-[#D14334] font-semibold text-sm lg:text-base'>{title}</p>
       <div className='flex flex-col gap-2 relative items-center'>
       <p className='font-bold lg:text-3xl text-xl text-[#1A1A1A]'>{subtitle}</p>
       <span className='w-[30%] h-1 rounded-full bg-[#D14334]'></span>
       </div>
     </div>
  )
}

export default Head