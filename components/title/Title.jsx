import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

const Title = ({title1,title2}) => {
  const array=title1.split('')
  return (
    <div className="relative mb-[75px] ">
<div className="flex w-full justify-center " >{array.map((el,i)=><Tilt tiltMaxAngleX={75} tiltMaxAngleY={75} key={i}><motion.h1 initial={{opacity:0,scaleY:0,y:-60}} whileInView={{opacity:0.4,scaleY:1,y:0 ,transition:{delay:i * 0.1,duration:0.4,type:'spring',damping:3}}} className="text-violet-500  cursor-default  hover:text-white duration-300 hover:opacity:100 text-5xl sm:text-8xl  uppercase text-center  intro  rounded-lg p-1 " >{el}</motion.h1></Tilt>)}</div>
<motion.p initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.6,duration:0.8}}}  className="absolute w-[100%]  font-bold bottom-[-30px] text-center uppercase text-gray-600 text-md  ">{title2}</motion.p>
    </div>
  )
}

export default Title
