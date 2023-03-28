import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";



const HomeSection = () => {




const parent={
  
  view:{
    transition:{
      staggerChildren:0.2,

    }},
 
}

const info={
  start:{opacity:0},
  view:{opacity:1,
    
   
  transition:{duration:1.5}
},

}


const linksParent={
  view:{
    transition:{
      staggerChildren:0.2,
      delayChildren:0.8

    }
  }
}

const links={
  start:{y:30,opacity:0},
  view:{y:0,opacity:1,
  transition:{
    duration:0.5,
    type:'spring',damping:5
   
  }}
}


const rubber=()=>{
  return {transform:['scale3d(1,1,1)','scale3d(1.4,.55,1)','scale3d(.75,1.25,1)','scale3d(1.25,.85,1)','scale3d(.9,1.05,1)','scale3d(1,1,1)']}
    
  
}

const greeting = (letters,param)=>{
  return (
    letters.split('').map((el,i)=>{return (el===' ' ? ' ' : <motion.p whileHover={()=>rubber()}
     className={`inline-block duration-300 cursor-default ${i >=9 && param && 'text-violet-700'}`}
      initial={{y:-15,opacity:0}}
       whileInView={{opacity:1,y:0,rotate:0,transition:{delay:i/15,duration:0.1,type:'spring',damping:4}}} key={i}>{el}</motion.p>)})
  )
}



  return (
    <div
      style={{
        backgroundImage: 'url("/assets/Images/BG2.jpeg")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-screen flex items-center justify-center section relative "
      id="home"
    >
    
      <div className="absolute top-0 left-0 w-full h-full bg-white/60 z-[0] backdrop-blur-[3px]" />
      <div className="mt-12 z-[10]">
        {" "}
        <motion.div variants={parent}  initial='start'   whileInView='view'>
        <motion.p variants={info}  className="text-gray-900 uppercase text-center text-xs mb-3"
        
        >
          let,s build something together
        </motion.p>
        <motion.h1 variants={info}  className="text-center mb-4 text-gray-700">{greeting('Hi, I am Ammar',true)}
         
        </motion.h1>
        <motion.h3 variants={info}  className="text-center text-lg md:text-xl text-gray-700">{greeting("A Front-End and ")}</motion.h3>
        <motion.h3 variants={info}  className="text-center text-lg md:text-xl text-gray-700">{greeting("Mobile cross-platform Developer ")}</motion.h3>
        <motion.p variants={info}  className=" text-sm mx-auto text-center w-[90%] sm:w-[70%] mt-4 text-gray-900">
         I design responsive websites and Mobile Apps for different SPA and MPA scenarios,Ready for big projects.
          {" "}
        </motion.p>
        </motion.div>
       
        <motion.div variants={linksParent} initial={'start'} whileInView={'view'} className="mt-8 flex items-center w-[250px] sm:w-[350px] mx-auto justify-between">
          <motion.a target={'_blank'} href="https://www.linkedin.com/in/ammar-haidar-569344223" whileHover={()=>rubber()} variants={links} className="sm:p-4 p-3 rounded-full text-violet-700 shadow-lg bg-[#ecf0f3] shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <FaLinkedinIn />
          </motion.a>
          <motion.a target={'_blank'}  href="https://www.github.com/ammar-1990" whileHover={()=>rubber()} variants={links}  className="sm:p-4 p-3 rounded-full shadow-lg text-violet-700 bg-[#ecf0f3] shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <ImGithub />
          </motion.a>
          <motion.a target={'_blank'} href="mailto:ammar.web.mobile@gmail.com" whileHover={()=>rubber()} variants={links}  className="sm:p-4 p-3 rounded-full shadow-lg text-violet-700 bg-[#ecf0f3] shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <MdEmail />
          </motion.a>
          <motion.a href="/assets/Ammar-Haidar-CV.pdf" download={true} whileHover={()=>rubber()} variants={links}  className="sm:p-4 p-3 rounded-full shadow-lg text-violet-700 bg-[#ecf0f3] shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <BsFillPersonLinesFill />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
