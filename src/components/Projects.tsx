'use client'
import { projects } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

import {motion} from 'framer-motion'
const Projects =()=>{
    return(
<div className="container my-[150px]">
<h1 className='text-3xl underline font-bold mx-2'>PROJECTS</h1>
<div className="grid md:grid-cols-3  gap-6 grid-cols-1 mx-2">

{projects.map((project)=>{
    return(
        <>
        <motion.div key={project.name} whileHover={{scale:1.1}} id="Projects" className="my-[20px] bg-[#1b1b1e] overflow-hidden rounded-md flex   flex-col   ">
<div className=" bg-white"> 
<Image src={project.imgsrc} alt="docifyimg"  


  width={400}
  height={100}
  className="aspect-video"
 ></Image>
  </div>   
 <p className="font-bold px-2 py-4 w-full ">{project.description}</p>
 <div className="flex justify-between py-4 px-2 mt-auto">
<Link target="_blank" href={project.livelink}> <motion.button whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} className="btn-secondary hover:border-pink-500">Live</motion.button></Link>
 <Link target="_blank" href={project.githublink}><motion.button  whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} className="btn-secondary hover:border-pink-500" >Github</motion.button></Link>
 </div>
 </motion.div>
 </>
    )
})}



</div>


</div>
    )
}
export default Projects;