import React from 'react'
import { about } from '@/utils/utils'
import {motion} from 'framer-motion'
import Cube from './Cube'
import { Canvas ,useFrame} from "@react-three/fiber";
import Organization from './Organization';
const About = () => {
  return (
    <div id="About" className='container'>
   
    <div className='my-[150px]  flex  justify-between items-center flex-col md:flex-row '>
    {about.map((about)=>{
        return (
            <div key={about.name} className='flex   flex-col md:max-w-[500px] mx-4'>
            <h1 className='text-3xl font-bold'>Hi I'm  <span className='underline text-[#FAF0E6]'>{about.name.toUpperCase()}</span></h1>
            
            <p className=' py-4 text-xl'>{about.content}</p>
            <motion.button   whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} className='btn-primary mr-auto hover:border-pink-500'>RESUME</motion.button>
            </div>
        )
    })}
   <div className='h-[400px] w-full'>
    <Canvas>
      <directionalLight position={[2,1,1]}/>
    <ambientLight intensity={2} />
      <Cube />
    </Canvas>
   </div>
   
    </div>
    <Organization/>
    </div>
  )
}

export default About