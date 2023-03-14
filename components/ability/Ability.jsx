import Image from "next/image";
import Tilt from 'react-parallax-tilt'
import {useCountUp} from 'react-countup';
import { useRef ,useState} from "react";
import { motion } from "framer-motion";



const Ability = ({ name, img, level }) => {
const countUpRef=useRef(null)
const theLevel=level.slice(0,level.length-1)
const {countUp,start,reset} = useCountUp({ref:countUpRef,start:0,duration:0.5,suffix:'%',end:theLevel})
const [full,setFull]=useState(false)
 
    const item ={
      start:{x:-25,y:-25,opacity:0},
      view:{opacity:1,x:0,y:0}
    }
  return (
    
    <motion.div variants={item} onMouseOver={()=>{start();setFull(true)}} onMouseOut={()=>{reset();setFull(false)}} className="flex relative min-h-[150px] z-[0] items-center shadow-md justify-center overflow-hidden gap-4 p-4 rounded-md cursor-pointer group ">
      <Image src={img} width={75} height={75} alt="img" />
      <p className="font-medium text-gray-600"> {name}</p>
      <div className="absolute p-3 w-full h-full gap-3  top-0 left-0  backdrop-blur-[2.5px] opacity-0 group-hover:opacity-100 duration-200 text-white flex 
      flex-col items-center justify-center ">
       
        <div style={{pointerEvents:'none'}} className="  h-4 w-[90%] mt-8 opacity-0 group-hover:mt-0 translate-y-[50%] group-hover:opacity-100   duration-200 border-[1px] absolute  rounded-[4px] border-white overflow-hidden z-[2] ">
        <span className=" absolute top-0 left-[50%] text-xs text-purple-700 font-medium z-10 translate-x-[-40%]" ref={countUpRef}></span>
         {level&& <div style={{width:full ? `${theLevel}%` : '0'}}
      
            className={`h-full bg-white 
      w-[0]  duration-500  `}
          ></div>}{" "}
        </div>
      
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-500 to-purple-900 opacity-50 top-0 left-0  z-[1]"></div>
      </div>
    </motion.div>
   
  );
};

export default Ability;
