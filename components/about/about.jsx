import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../title/Title";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";

import {RiDoubleQuotesL} from 'react-icons/ri'
import {RiDoubleQuotesR} from 'react-icons/ri'
import {FaAsterisk} from 'react-icons/fa'

const About = () => {
const router=useRouter()
  
  




  return (
    <div className="relative px-4 lg:px-10 pt-32  min-h-screen section " id="about">
      
      <div>
        <Title title1={"about"} title2={"who i am"} />
      </div>
      <div className=" flex-col justify-center mt-[50px] sm:justify-between lg:flex-row gap-8 flex  items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{
            opacity: 1,
            
            x: 0,
           
           
          }}
          transition={{ type: "spring", damping:9, delay:0.5  }}
          className=" p-4 md:p-8   bg-white rounded-xl text-gray-700  lg:w-[75%]  shadow-md "
        
        >
          <p className="text-xs sm:text-sm my-3 sm:text-left text-center ">
          I am a computer engineer with a huge passion for web development , I  speak four languages: English and Russian fluently ,German -B1- and Arabic as a mother language.{" "}
          </p>
          <div className="my-5 flex justify-center gap-4 text-[7px]"><FaAsterisk /><FaAsterisk /><FaAsterisk /></div>
          <p className="text-xs sm:text-sm   sm:text-left text-center">
            Now I am using ReactJS and NextJS to design the most complicated user interfaces,and with React native I build Mobile Apps for Android and IOS operating systems, I have the capability to start maintain and finish big projects for any common scenario such as Landing page, Blogs website, E commerce, Social media and much more.  {" "}
          </p>
          <div className="my-5 flex justify-center gap-4 text-[7px]"><FaAsterisk /><FaAsterisk /><FaAsterisk /></div>
         
         
       

          <p className="text-xs sm:text-sm my-3 sm:text-left text-center ">Familiar with Agile termonology and would like to take a part in a collaborative team and get aquainted with quailified developers in order to start a lot of creative ideas together.</p>
          <div className="my-5 flex justify-center gap-4 text-[7px]"><FaAsterisk /><FaAsterisk /><FaAsterisk /></div>
           <p className="text-xs sm:text-sm my-3 sm:text-left text-center "> I develope my self daily and learn new technologies,as well as  best practices for coding in order to get stuff done properly.</p>
           <div className="my-5 flex justify-center gap-4 text-[7px]"><FaAsterisk /><FaAsterisk /><FaAsterisk /></div>

         <p className="text-xs sm:text-sm   sm:text-left text-center">Now I'm learning NodeJS and in the very near future planning to becom a MERN fullstack developer.</p>
          <p className="text-xs sm:text-sm mt-8  text-center  flex justify-center"> <span className="text-violet-700"><RiDoubleQuotesL /></span> Everyday is a learning day <span className="text-violet-700"><RiDoubleQuotesR/></span></p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x:40 }}
        whileInView={{
          opacity: 1,
          
          x: 1,
         
        }}
        transition={{ type: "spring", damping:9  ,delay:0.5}}
          className=" aspect-video relitive  lg:w-[75%] w-full sm:w-[80%] "
        >
          <Image
            fill
            src="/assets/Images/Labtop2.jpg"
            alt="img"
            objectFit="cover"
            className="shadow-md shadow-black"
          />
          <motion.div
            initial={{ top: 0, right: 0 }}
            whileInView={{
              right: -10,
              top: -10,
              transition: { delay: 1, duration: 0.8 },
            }}
            className="absolute w-full h-full  z-[-1]  bg-violet-400 "
          ></motion.div>
         
        </motion.div>
      </div>
    </div>
  );
};

export default About;
