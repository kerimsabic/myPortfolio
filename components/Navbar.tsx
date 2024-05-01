import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props{
    openNavigation:()=>void;
}

const Navbar = ({openNavigation}:Props) => {

    
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>Keirm
                <span className='text-yellow-300'>Šabić</span>
            </h1>
            <div className='nav-link'>HOME</div>
            <div className='nav-link'>SERVICES</div>
            <div className='nav-link'>ABOUT</div>
            <div className='nav-link'>PROJECTS</div>
            <div className='nav-link'>SKILS</div>
            <div className='nav-link'>RESUME</div>
            <div onClick={openNavigation}>
                <Bars3Icon className='md:hidden text-yellow-300 w-[2rem] h-[2rem] cursor-pointer'/>
            </div>
        </div> 
    </div>
  )
}

export default Navbar
