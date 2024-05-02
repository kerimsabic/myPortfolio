import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-scroll';

interface Props{
    navigation:boolean;
    closeNavigation:()=>void;
}

const MobileNav = ({navigation,closeNavigation}:Props) => {

    const navigaitonAnimation=navigation?'translate-x-0  transition':'translate-x-[-100%]'

  return (
    <div className={`fixed ${navigaitonAnimation} transform transition-all duration-500 top-0 left-0 bottom-0 z-[100000] bg-[#09101a]`}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
            
            <Link to='home' spy={true} smooth={true} offset={-40} duration={700} onClick={closeNavigation}><div className='nav-link-mobile'>Home</div></Link>
            <Link to='about' spy={true} smooth={true} offset={-40} duration={700} onClick={closeNavigation}><div className='nav-link-mobile'>ABOUT</div> </Link>
            <Link to='skills' spy={true} smooth={true} offset={-40} duration={700} onClick={closeNavigation}><div className='nav-link-mobile'>SKILLS</div></Link>
            <Link to='projects' spy={true} smooth={true} offset={-40} duration={700} onClick={closeNavigation}><div className='nav-link-mobile'>PROJECTS</div></Link>
            <Link to='contact' spy={true} smooth={true} offset={-40} duration={700} onClick={closeNavigation}><div className='nav-link-mobile'>CONTACT</div></Link>
        </div>
        <div onClick={closeNavigation} className='absolute z-[1000000] text-yellow-300 top-[2rem] right-[2rem] w-[2rem] h-[2rem ]'>
            <XMarkIcon/>
        </div>
    </div>
  )
}

export default MobileNav
