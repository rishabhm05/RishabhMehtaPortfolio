import React from 'react'
import { skills } from '@/utils/utils'
import {motion} from 'framer-motion'
const Skills = () => {
  return (
    <div id="Skills" className='container px-4'>
       <h1 className='text-3xl underline font-bold'>SKILLS</h1>
       <div className=' my-6 px-4 rounded-lg border-2 border-[#1b1b1e] bg-[#1b1b1e] py-4'>
        <p className='text-xl'>I constantly love to learn new and exciting things in Web Development. Currently I'm learning React Native and learning about Progressive Web Applications.</p>
       <div className='grid md:grid-cols-3 gap-10 pt-10'>
       {skills.map((skill)=>{
        return (
            <div key={skill.name} className='flex items-center gap-2 cursor-pointer'>
            <motion.svg  whileHover={{ scaleX:1.5 }}
      transition={{ duration: 0.1 }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"><path d="M5 12l14 0"></path><motion.path d="M13 18l6 -6"></motion.path><motion.path d="M13 6l6 6"></motion.path></motion.svg>
            <span>
                {skill.name}
            </span>
        </div>
        )
       })}
       </div>
       </div>
    </div>
  )
}

export default Skills