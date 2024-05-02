import React from 'react'

interface Props {
    title:string;
    description:string;
}

const SkillsItem = ({title, description}:Props) => {
  return (
    <div className='mb-[2rem] md:mb-[4rem]'>
       
        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[22px] text-[#55e6a5]'>
            {title}
        </h1>
        <p className='text-[#aaaaaa] font-normal text-[17px] opacity-80'>
            {description}
        </p>
      
    </div>
  )
}

export default SkillsItem
