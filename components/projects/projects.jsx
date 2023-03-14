import Project from "../project/Project"
import { motion } from "framer-motion"
import { data } from "../data"





const Projects = () => {

 
  return (
    <div className=" pt-32 px-2 lg:px-10 section min-h-screen"  id="projects">
      <motion.div className="mb-20" initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.5,duration:0.4}}}>
      <p className="text-purple-600 uppercase my-6 font-medium tracking-widest">projects</p>
      <h3 className="text-gray-600 uppercase ">What I have built</h3>
      </motion.div>
     
      <div  className="max-w-[1200px] w-full mx-auto grid md:grid-cols-2 gap-6 sm:px-6 ">
{data.sort((a,b)=>(b.id-a.id)).map((el,i)=><Project i={i} key={el.id} id={el.id}  name={el.name} img={el.img}  pull={el.pull}/> )}

      </div>
    </div>
  )
}

export default Projects