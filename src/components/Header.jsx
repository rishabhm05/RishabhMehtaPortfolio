'use client'
import { Links } from "@/utils/utils";
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-scroll";

const Header =()=>{
const[open,setOpen] = useState(false);
return(
    <>
    
    <nav className="md:flex justify-center fixed items-center  md:mx-auto  left-[1/2] top-2 w-full hidden z-[999] h-[50px] ">
        <ul className="flex gap-10 items-center justify-center bg-[#1b1b1e] px-4 py-2 rounded-full">
        {Links.map((link,index)=>{
            return <motion.li key={link.hash} whileHover={{scale:1.2}}><Link className="px-4 cursor-pointer" smooth={true} offset={-100} to={link.name}>{link.name.toUpperCase()}</Link></motion.li>
        })}
        </ul>
    </nav>
    {/* Mobile Menu */}
    <nav className="flex  top-0 fixed w-full md:hidden  ">
     <span onClick={()=>setOpen(!open)} className=" z-10 absolute right-[2%] top-2 cursor-pointer">{!open?<GiHamburgerMenu size={20}/>:<ImCross size={20}/>}</span>
     <ul className={`flex  bg-[#1b1b1e] flex-col items-center justify-center w-full py-4 transition-transform   ${open?"translate-y-[0%]":"translate-y-[-100%]"}`}>
        {Links.map((link,index)=>{
            return <motion.li key={link.hash} className="py-4"  whileHover={{scale:1.2}}><Link onClick={()=>setOpen(false)} className="px-4 cursor-pointer" smooth={true} offset={-100} to={link.name}>{link.name.toUpperCase()}</Link></motion.li>
        })}
        </ul>
    </nav>
</>
)
}
export default Header;