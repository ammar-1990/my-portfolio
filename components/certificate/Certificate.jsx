import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import Tilt from "react-parallax-tilt"

const Certificate = ({data}) => {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
    <motion.div 
    initial={{scale:0.5,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    transition={
       { delay:0.6,
    duration:0.8,type:'spring',damping:13}
    }
    className=" group rounded-lg shadow-md shadow-gray-500 overflow-hidden">
<div className="text-white relative  bg-violet-700 flex justify-center p-3 gap-2 items-center">

<span className="w-10 h-10 absolute  left-1 rounded-full flex items-center justify-center bg-white p-2"><img className="w-6 " src={data.icon} alt="" /></span>
<span className="capitalize">{data.name}</span>
</div>
<div className="relative  p-2">
<div

className=" aspect-video  rounded-lg overflow-hidden ">
    <img src={data.img} alt={data.name} className='object-cover w-full'   />

</div>
<div className="absolute inset-0   bg-gradient-to-r from-violet-700 to-violet-200 opacity-0 group-hover:opacity-30 duration-300"></div>
<a href ={data.link} target={'_blank'} className='pointer-events-none group-hover:pointer-events-auto absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer translate-x-[-50%] translate-y-[-50%]'><button className="  px-6 py-2 bg-violet-700 text-white ">Details</button></a>

</div>
    </motion.div>
    </Tilt>
  )
}

export default Certificate