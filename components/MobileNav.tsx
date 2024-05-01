import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props{
    navigation:boolean;
    closeNavigation:()=>void;
}

const MobileNav = ({navigation,closeNavigation}:Props) => {

    const navigaitonAnimation=navigation?'translate-x-0  transition':'translate-x-[-100%]'

  return (
    <div className={`fixed ${navigaitonAnimation} transform transition-all duration-500 top-0 left-0 bottom-0 z-[100000] bg-[#09101a]`}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
            <div className='nav-link-mobile'>Home</div>
            <div className='nav-link-mobile'>SERVICES</div>
            <div className='nav-link-mobile'>ABOUT</div>
            <div className='nav-link-mobile'>PROJECTS</div>
            <div className='nav-link-mobile'>SKILS</div>
            <div className='nav-link-mobile'>RESUME</div>
        </div>
        <div onClick={closeNavigation} className='absolute z-[1000000] text-yellow-300 top-[2rem] right-[2rem] w-[2rem] h-[2rem ]'>
            <XMarkIcon/>
        </div>
    </div>
  )
}

export default MobileNav
