import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]' id='about'>
            <div className='w-[80%] mx-auto gap-[3rem] items-center'>
                <div>
                    <h1 className='relative text-[20px] font-bold uppercase text-[#55e6a5] after:content-[""] after:block after:absolute after:h-[2px] after:bg-yellow-400  after:w-[103px] after:scale-x-100 after:origin-center'>
                        About ME</h1>
                </div>
                <div className='grid lg:grid-cols-2 gap-3'>
                    <div className='flex  items-center'>
                        <div className='pt-[5rem] w-[400px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[400px]'>
                            <Image src="/images/u1.jpg" alt='User' layout='fill' className='object-cover rounded-full' />
                        </div>
                    </div>


                    <div className='text-white pt-[3rem] text-[16px]'>
                        <p> Hello! I&apos;m Kerim Šabić, an enthusiastic and dedicated third-year student at International Burch University, actively pursuing a degree in Information Technology. <br />
                            <br /> As a passionate programmer, I have a particular affinity for Java and a keen interest in backend development. I&apos;m driven by the opportunity to solve complex problems and create efficient solutions.<br />
                            <br />Currently, I&apos;m actively involved in a team project called the Gradyng System Project, where we&apos;re utilizing FlightPHP and React to develop a cutting-edge application. This hands-on experience allows me to apply my skills in real-world scenarios and collaborate effectively within a team environment.<br />
                            <br />Furthermore, I&apos;m committed to continuous learning and growth. Currently, I&apos;m diving into the realm of DevOps Engineering on the AWS Cloud, eager to expand my knowledge and expertise in this rapidly evolving field.<br />
                            <br /> I&apos;m passionate about contributing my skills and knowledge to dynamic projects while continuously expanding my understanding of cutting-edge technologies. Join me on this journey of exploration and innovation!<br />
                        </p>
                    </div>



                </div>



            </div>
        </div>
    )
}

export default About
