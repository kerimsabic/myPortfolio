import React, { useState } from 'react'
import SkillsItem from './SkillsItem'
import SkilsLanguage from './SkilsLanguage'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const Skills = () => {

  const [showSkillsFrontEnd, setShowSkillsFront] = useState(true);
  const [showSkillsBackend, setShowSkillsBack] = useState(true);
  const [showDatabases, setShowDatabases] = useState(false);
  const [showSoftSkills, setShowSoftSkills] = useState(false);
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const additionalSkills = [
    { title: "Object Oriented Programming", description: "Principles of Object Oriented Programming with Java" },
    { title: "Human Computer Interaction", description: "Principles of UI and UX. Working with Figma, HTML, CSS, JS" },
    { title: "Natural Language Processing", description: "Princiles of data collecting and cleaning, learning about models, introduciton to Machine Learning. Working with Python" }
  ];

  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] overflow-y-auto' id='skills'>

      <h1 className='heading'>
        Courses & <span className='text-yellow-300'>Skills</span>
      </h1>

      <div className='w-[80%] mx-auto pt-[4rem]  md:pt-[4rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem] items-center '>
        <div>
          <SkillsItem title="Web Engineering" description="Web Engineering course for developing full stack web application using
          React and Typescript and Java Spring Boot for the
          backend." />
        </div>
        <div>
          <SkillsItem title="Database Systems" description="Advanced concepts of SQL
                Introduction to the NoSQL with MongoDB, aggregation pipeline" />
        </div>
        <div>
          <SkillsItem title="Introduction to Web Programming" description="Introduction to web programming with JQuery, MYSQL, FlightPHP" />

        </div>
        <div>
          <SkillsItem title="Mobile Programming" description="Mobile Programming course with Kotlin and Jatpack Compose.
              Throughout this course I was developing the football results mobile app." />
        </div>
        <div>
          <SkillsItem title="Software Verification Validation and Testing" description="Learning the principles of Software Verification Validation and Testing.
              Writing tests in Selenium and JUnit" />

        </div>
        <div>
          <SkillsItem title="Data Structires and Algorithms" description="Data Structures and Algorithms with Java" />
        </div>
      </div>
      <div className='flex justify-center items-center w-full'>
        <button onClick={() => setShowMoreSkills(!showMoreSkills)} className='p-2 rounded-md bg-[#55e6a5] text-black hover:bg-yellow-300 '>
          {showMoreSkills ? 'Hide Courses' : 'Show More Courses'}
        </button>
      </div>

      {/* Display additional SkillsItem components when showMoreSkills is true */}
      {showMoreSkills && (
        <div className='w-[80%] mx-auto pt-[4rem]  md:pt-[4rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem] items-center'>
          {additionalSkills.map((skill, index) => (
            <SkillsItem key={index} title={skill.title} description={skill.description} />
          ))}
        </div>
      )}








      <div className='w-[80%] mx-auto pt-[2rem]  grid  md:grid-cols-2 gap-[2rem] i'>
        <div>
          <button onClick={() => setShowSkillsFront(!showSkillsFrontEnd)} className='flex justify-center items-center w-full'>
            <div className='relative mb-[3rem] flex items-center'>
              <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold flex items-center hover:bg-gray-700'>
                <span className='text-yellow-300'>Frontend&nbsp;</span>Skills
                {showSkillsFrontEnd ? <ChevronUpIcon className='w-5 h-5 ml-2 text-white' /> : <ChevronDownIcon className='w-5 h-5 ml-2 text-white' />}
              </h1>

            </div>
          </button>
          <div className={` opacity-0 transition-opacity duration-500 ease-in-out ${showSkillsFrontEnd ? 'opacity-100' : 'hidden'}`}>
            <SkilsLanguage skill1="JavaScript" skill2="TypeScript" skill3="React" skill4="Html" skill5="css" level1="w-[100%]" level2="w-[100%]" level3="w-[100%]" level4="w-[100%]" level5="w-[100%]" />
          </div>
        </div>

        <div>
          <button onClick={() => setShowSkillsBack(!showSkillsBackend)} className='flex justify-center items-center w-full'>
            <div className='relative mb-[3rem]'>
              <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold hover:bg-gray-700 flex items-center'>
              <span className='text-yellow-300 '>Backend&nbsp;</span>Skills
                {showSkillsBackend ? <ChevronUpIcon className='w-5 h-5 ml-2 text-white' /> : <ChevronDownIcon className='w-5 h-5 ml-2 text-white' />}
              </h1>
            </div>
          </button>
          <div className={`transition-opacity duration-500 ease-in-out ${showSkillsBackend ? 'opacity-100' : 'hidden'}`}>
            <SkilsLanguage skill1="Java" skill2="Spring Boot" skill3="PHP" skill4="FlightPHP" level1="w-[100%]" level2="w-[100%]" level3="w-[100%]" level4="w-[100%]" />
          </div>
        </div>

        {showSkillsFrontEnd ? (
          <div className=''>
          <button onClick={() => setShowDatabases(!showDatabases)} className='flex justify-center items-center w-full'>
            <div className='relative mb-[3rem] flex items-center'>
              <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold flex items-center hover:bg-gray-700'>
              Databases & Other
                {showDatabases ? <ChevronUpIcon className='w-5 h-5 ml-2 text-white' /> : <ChevronDownIcon className='w-5 h-5 ml-2 text-white' />}
              </h1>

            </div>
          </button>
          <div className={`opacity-0 transition-opacity duration-500 ease-in-out ${showDatabases ? 'opacity-100' : 'hidden'}`}>
          <SkilsLanguage skill1="MYSQL" skill2="MongoDB" skill3='Kotlin Jatpack Compose'  level1="w-[100%]" level2="w-[100%]" level3='w-[100%]' />
          </div>
        </div>

        ) : (
          <div className=' max-md:mt-[3rem]'>
          <button onClick={() => setShowDatabases(!showDatabases)} className='flex justify-center items-center w-full'>
            <div className='relative mb-[3rem] flex items-center'>
              <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold flex items-center hover:bg-gray-700'>
                Databases & Other
                {showDatabases ? <ChevronUpIcon className='w-5 h-5 ml-2 text-white' /> : <ChevronDownIcon className='w-5 h-5 ml-2 text-white' />}
              </h1>

            </div>
          </button>
          <div className={`opacity-0 transition-opacity duration-500 ease-in-out ${showDatabases ? 'opacity-100' : 'hidden'}`}>
            <SkilsLanguage skill1="MYSQL" skill2="MongoDB" skill3='Kotlin Jatpack Compose'  level1="w-[100%]" level2="w-[100%]" level3='w-[100%]' />
          </div>
        </div>

        )}

        

        {showSkillsBackend ? (
            <div>
            <button onClick={() => setShowSoftSkills(!showSoftSkills)} className='flex justify-center items-center w-full'>
              <div className='relative mb-[3rem] flex items-center'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold flex items-center hover:bg-gray-700'>
                  Soft Skills 
                  {showSoftSkills ? <ChevronUpIcon className='w-5 h-5 ml-2 text-white' /> : <ChevronDownIcon className='w-5 h-5 ml-2 text-white' />}
                </h1>
  
              </div>
            </button>
            <div className={`opacity-0 transition-opacity duration-500 ease-in-out ${showSoftSkills ? 'opacity-100' : 'hidden'}`}>
              <SkilsLanguage skill1="adaptive" skill2="fast learning" skill3="hard-working" skill4="dedicated" level1="w-[100%]" level2="w-[100%]" level3="w-[100%]" level4="w-[100%]" />
            </div>
          </div>
        ):(
          <div className=' max-md:mt-[3rem]'>
          <button onClick={() => setShowSoftSkills(!showSoftSkills)} className='flex justify-center items-center w-full'>
            <div className='relative mb-[3rem] flex items-center'>
              <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold flex items-center hover:bg-gray-700'>
                Soft Skills 
                {showSoftSkills ? <ChevronUpIcon className='w-5 h-5 ml-2 text-white' /> : <ChevronDownIcon className='w-5 h-5 ml-2 text-white' />}
              </h1>

            </div>
          </button>
          <div className={`opacity-0 transition-opacity duration-500 ease-in-out ${showSoftSkills ? 'opacity-100' : 'hidden'}`}>
            <SkilsLanguage skill1="adaptive" skill2="fast learning" skill3="hard-working" skill4="dedicated" level1="w-[100%]" level2="w-[100%]" level3="w-[100%]" level4="w-[100%]" />
          </div>
        </div>
        )}

        

      </div>




    </div>
  )
}

export default Skills
