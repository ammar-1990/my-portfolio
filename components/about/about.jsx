import { motion } from "framer-motion"
import Image from "next/image"

const About =()=> {
    return (
    <div className=" px-2 lg:px-10 pt-32 h-screen section" id='about'>    
    <motion.div initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.6,duration:0.8}}} >
         <p className="text-purple-600 uppercase my-6 font-medium tracking-widest">About</p>
         <h3 className="uppercase text-gray-600">who I am</h3>
         </motion.div>      
    <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0,transition:{delay:1,duration:0.8}}} className=" flex-col justify-center sm:justify-between sm:flex-row md:gap-2 gap-6 flex items-center">

        <div >
 
            
            <p className="text-base my-3 text-gray-600">asdasd asd asd asd asd asd asdasdasd as dasd asd asdasdas das das das das dasd asd asdsad asd asd sad asd sadasdasdas das das dasd asdasdas das </p>
            <p className="text-base text-gray-600">asdasd asd asd asd asd asd asdasdasd as dasd asd asdasdas das das das das dasd asd asdsad asd asd sad asd sadasdasdas das das dasd asdasdas das </p>
            </div>
        <div  className="shadow-lg  w-[100%] relative overflow-hidden shadow-gray-400 rounded-md p-3 hover:scale-105 duration-300">
            <div className="relative aspect-video rounded-md overflow-hidden "><Image fill src='/assets/Labtop.jpeg' alt='img' /></div>
            
        </div>
    </motion.div>
    </div>
    )
}

export default About