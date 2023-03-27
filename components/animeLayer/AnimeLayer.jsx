import { motion } from "framer-motion"

const AnimeLayer = () => {
  return (
    <motion.div 
initial={{scaleY:2,y:500}}
animate={{scaleY:3,y:-3000}}
exit={{scaleY:2,y:1200}}


    transition={{duration:1.2}}
    className="anime flex items-center justify-center text-white text-8xl font bold"></motion.div>
  )
}

export default AnimeLayer