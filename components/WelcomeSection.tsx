import React from 'react'
import Particle from './Particle'
import TextAnimation from './TextAnimation'
import Image from 'next/image'


const WelcomeSection = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        
        <div>
          <h1 className='text-[35px] text-white font-bold md:text-[45px]'>
            HI , I'M <span className='text-yellow-300'>KERIM ŠABIĆ!</span>
          </h1>
          <TextAnimation />
        </div>

        <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
          <Image src="/images/u1.jpg" alt='User' layout='fill' className='object-cover rounded-full'/>
        </div>

      </div>

    </div>
  )
}

export default WelcomeSection
