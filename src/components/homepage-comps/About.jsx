import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="About" 
        className='relative w-full h-screen text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>About me</h2>
                    </div>

                    <p className="mb-4 py-6">Hey! I'm based on Singapore and I'm Professional in Frontend developer with more than 6 years of experience.
                    </p>

                    <p>Front-End Developer with proven experience at Zillow and HubSpot in
helping companies create and maintain a better code base for
reusability. Capable of continuous learning from senior developers while
still nurturing junior developers. Experience in driving projects forward
as the development team leader, facilitating projects from concept to
launch. Passionate about learning and development with a desire to
apply skills on a larger development team at Redfin. Eager to tackle more
complex problems and continue to find ways to maximize user efficiency.</p>

                
            </div>

            <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
