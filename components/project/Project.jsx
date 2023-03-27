import {useState} from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
const Project = ({name,img,pull,id,i,setTrans}) => {



  const item ={
    start:{opacity:0,x:i%2===0?-20:+20},
    view:{opacity:1,x:0,transition:{duration:2,delay:0.6,type:'spring',damping:8}}
  }
  return (
    <motion.div variants={item} initial='start' whileInView='view'
     className="bg-white relative shadow-gray-400 shadow-md p-2 rounded-md group overflow-hidden ability">
  <div className="w-full aspect-video rounded-md relative  overflow-hidden">

<img   src={img}  className={`w-full  ${!pull && ("aspect-video object-contain ")} ${pull && `group-hover:duration-[8s]  duration-[1.5s]  group-hover:translate-y-[-60%] linear`}`} />
</div>
<div className={`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100  duration-300 overflow-hidden `}>
<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-700 to-violet-200 opacity-30'></div>

  <h3 className='cursor-default absolute left-0 w-full text-center capitalize text-sm  text-white  duration-300 px-6 py-2   bg-gradient-to-r from-violet-700 to-violet-500 delay-300' >{name}</h3>
  <Link scroll={false}  href={`/${id}`} ><p className='text-white capitalize text-center py-2 px-4  text-xs bg-gradient-to-r from-violet-700 to-violet-500 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  font-medium cursor-pointer'>More Info</p></Link>

</div> 

 </motion.div>
  )
}

export default Project