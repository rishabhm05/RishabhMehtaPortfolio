import Link from 'next/link';
import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import {motion} from 'framer-motion';
const Contact = () => {
  return (
    <div className='container ' id="Contact">
    <p className='font-bold underline text-3xl   mx-2'>CONTACT ME</p>
    <p className='py-2 text-2xl mx-2'>I am open to new exciting Oppurtunities. You can reach out to me.</p>
    <div className="flex gap-4 mx-2 my-4">
          <Link
            href="https://www.linkedin.com/in/rishabh-mehta-7b395618b/"
            target="_blank"
            rel=" noreferrer"
          >
            
            <AiFillLinkedin className="text-white  text-4xl hover:text-pink-500  "></AiFillLinkedin>
          </Link>
          <Link
            href="https://github.com/rishabhm05"
            target="_blank"
            rel=" noreferrer"
          >
            <AiFillGithub className="text-white  text-4xl hover:text-pink-500"></AiFillGithub>
          </Link>
          <Link
            href="mailto:mehtarishabh60@gmail.com"
            target="_blank"
            rel=" noreferrer"
          >
            <AiOutlineMail className="text-white  text-4xl hover:text-pink-500"></AiOutlineMail>
          </Link>
        </div>  
    </div>
  )
}

export default Contact