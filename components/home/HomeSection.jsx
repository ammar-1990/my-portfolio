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
  start:{y:10,opacity:0},
  view:{y:0,opacity:1,
  transition:{
    duration:0.5,
   
  }}
}

  return (
    <div
      style={{
        backgroundImage: 'url("/assets/BG2.jpeg")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-screen flex items-center justify-center section relative"
      id="home"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white/70 z-[0] backdrop-blur-[3px]" />
      <div className="mt-12 z-[10]">
        {" "}
        <motion.div variants={parent}  initial='start'   whileInView='view'>
        <motion.p variants={info}  className="text-gray-900 uppercase text-center text-sm mb-3"
        
        >
          let,s build something together
        </motion.p>
        <motion.h1 variants={info}  className="text-center mb-4 text-gray-700">
          Hi, I'm <span className="text-purple-700 ">Ammar</span>
        </motion.h1>
        <motion.h1 variants={info}  className="text-center text-gray-700">A Front-End Developer</motion.h1>
        <motion.p variants={info}  className="mx-auto text-center w-[90%] sm:w-[70%] mt-4 text-gray-900">
          lorem20 asd nsanbd asbd jashdjk hasjhd jashjkah jdh jkash jkhasljdh
          jasld halskjhd jkashd lahsdjk haslkjd hajkshd ljkashd 
          {" "}
        </motion.p>
        </motion.div>
       
        <motion.div variants={linksParent} initial={'start'} whileInView={'view'} className="mt-8 flex items-center w-[250px] sm:w-[350px] mx-auto justify-between">
          <motion.span variants={links} className="sm:p-5 p-3 rounded-full text-purple-700 shadow-lg bg-[#ecf0f3] shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <FaLinkedinIn />
          </motion.span>
          <motion.span variants={links}  className="sm:p-5 p-3 rounded-full shadow-lg text-purple-700 bg-[#ecf0f3] shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <ImGithub />
          </motion.span>
          <motion.span variants={links}  className="sm:p-5 p-3 rounded-full shadow-lg text-purple-700 bg-[#ecf0f3] shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <MdEmail />
          </motion.span>
          <motion.span variants={links}  className="sm:p-5 p-3 rounded-full shadow-lg text-purple-700 bg-[#ecf0f3] shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <BsFillPersonLinesFill />
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
