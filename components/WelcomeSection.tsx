import React from 'react'
import Particle from './Particle'
import TextAnimation from './TextAnimation'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'


const WelcomeSection = () => {

  const handleDownloadCv = () => {
    // Replace 'cv.pdf' with the actual path to your CV file
    const cvUrl = '/resume/kerimCV.pdf';

    // Trigger download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Kerim Šabić CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center mt-8 max-sm:mt-12">
      <Particle />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>

        <div>
          <h1 className='text-[35px] text-white font-bold md:text-[45px]'>
            HI , I'M <span className='text-yellow-300'>KERIM ŠABIĆ!</span>
          </h1>

          <TextAnimation />
          <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
            Enthusiastic and dedicated third-year student at the International Burch
            University, pursuing a degree in Information Technology. <br></br> A passionate
            programmer with particular affinity for JAVA and keen interest in backend
            development. 
          </p>
          <div className=' mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button onClick={()=>handleDownloadCv()} className='px-[2rem] hover:bg-yellow-300 transition-all duration-150 py-[1rem] text-[18px] flex items-center font-bold uppercase bg-[#55e6a5] text-black space-x-2'>
              <p>Download Cv</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.6rem] text-black' />
            </button>

          </div>
        </div>

        <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
          <Image src="/images/kerim2.jpg" alt='User' layout='fill' className='object-cover rounded-full' />
        </div>

      </div>

    </div>
  )
}

export default WelcomeSection
