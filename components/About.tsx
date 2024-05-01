import React from 'react'

const About = () => {
    return (
        <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]' id='about'>
            <div className='w-[80%] mx-auto gap-[3rem] items-center'>
                <div>
                    <h1 className='relative text-[20px] font-bold uppercase text-[#55e6a5] after:content-[""] after:block after:absolute after:h-[2px] after:bg-yellow-400  after:w-[103px] after:scale-x-100 after:origin-center'>
                        About ME</h1>
                </div>

                <div className='text-white pt-[3rem] text-[18px]'>
                    <p> Enthusiastic and dedicated third-year student at the International Burch
                        University, pursuing a degree in Information Technology. A passionate
                        programmer with particular affinity for JAVA and keen interest in backend
                        development. Eager to contribute my skills and knowledge to dynamic
                        projects while continuously expanding my understanding of cutting-edge
                        technologies.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About
