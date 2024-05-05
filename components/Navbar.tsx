import { ArrowDownTrayIcon, Bars3Icon } from '@heroicons/react/20/solid'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import React from 'react'

interface Props {
    openNavigation: () => void;
}

const Navbar = ({ openNavigation }: Props) => {

    const handleDownloadCv = () => {
        // Replace 'cv.pdf' with the actual path to your CV file
        const cvUrl = '/resume/kerimResume.pdf';
    
        // Trigger download
        const link = document.createElement('a');
        link.href = cvUrl;
        link.setAttribute('download', 'Kerim Šabić CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


    return (
        <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-[90%] mx-auto h-[100%]'>
                <div className='flex-[0.6]'>

                    <Link to='home' spy={true} smooth={true} offset={-10} duration={700}>
                        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>Kerim
                            <span className='text-yellow-300'>Šabić</span>
                        </h1>
                    </Link>

                </div>

                <Link to='home' spy={true} smooth={true} offset={-10} duration={700}><div className='nav-link'>HOME</div></Link>
                <Link to='about' spy={true} smooth={true} offset={-100} duration={700}><div className='nav-link'>ABOUT</div> </Link>
                <Link to='skills' spy={true} smooth={true} offset={-100} duration={700}><div className='nav-link'>SKILS</div></Link>
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={700}><div className='nav-link'>PROJECTS</div></Link>
                <Link to='contact' spy={true} smooth={true} offset={100} duration={700}><div className='nav-link'>CONTACT</div></Link>

                
                <div className=' space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 max-md:hidden max-sm:hidden'>
                    <button onClick={() => handleDownloadCv()} className='px-[0.5rem] hover:bg-yellow-300 transition-all duration-150 py-[0.5rem] text-[15px] flex items-center font-bold uppercase bg-[#55e6a5] text-black space-x-2'>
                        <p>Download Cv</p>
                        <ArrowDownTrayIcon className='w-[1rem] h-[1rem] text-black' />
                    </button>

                </div>
                <div onClick={openNavigation}>
                    <Bars3Icon className='md:hidden text-yellow-300 w-[2rem] h-[2rem] cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
