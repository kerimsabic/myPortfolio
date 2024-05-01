import About from '@/components/About';
import MobileNav from '@/components/MobileNav'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills';
import WelcomeSection from '@/components/WelcomeSection';
import React, { useState } from 'react'

const HomePage = () => {
  const [navigation, setNavigation] = useState(false);
  const openNavigation = () => setNavigation(true);
  const closeNavigation = () => setNavigation(false);
  
  return (
    <div className='overflow-x-hidden'>
      <div>

        {/* Navbar */}
        <MobileNav navigation={navigation} closeNavigation={closeNavigation} />
        <Navbar openNavigation={openNavigation} />

        {/* Welcome Section */}
        <WelcomeSection />

        <div className='relative z-30'>
          {/* About */}
          <About/>
          <Skills/>
        </div>
        
      </div>
    </div>
  )
}

export default HomePage
