import { motion } from "framer-motion";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { TbArrowBack } from "react-icons/tb";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const ProjectId = ({ element }) => {
  const router = useRouter();
useEffect(()=>{window.scrollTo(0,0)},[])
  

  const myText=element.overView.split('.')
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.3}} className="min-h-screen pb-2 ">
      <Head>
  <title>
    {element.name}
  </title>
</Head>
      <div className="h-[30vh] lg:h-[40vh] overflow-hidden relative w-full bg-zinc-600">
        <div className="absolute top-0  left-0 w-full h-full bg-black/70 z-10" />
        <img
          src={element.img}
          className={`${element.pull ? "sm:w-1/2" : "w-auto "} ${
            !element.pull && "md:w-1/2"
          } block mx-auto`}
          alt=""
        />
        <div className="absolute bottom-5 z-20 px-2 lg:px-10">
          <h3 className="text-white uppercase font-bold ">{element.name}</h3>
        </div>
      </div>

      <div className="mt-8 px-2 lg:px-10 flex flex-col gap-4 lg:flex-row">
        <div className="flex-[3]  ">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.4, type: "spring", damping: 13 },
            }}
            className="overflow-hidden uppercase text-violet-700 font-bold"
          >
            Project
          </motion.p>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.7, type: "spring", damping: 13 },
            }}
            className="overflow-hidden text-gray-600 mt-4 mb-4"
          >
            OVERVIEW
          </motion.h2>
          <motion.p className="overflow-hidden  text-xs sm:text-sm lg:w-[80%] mb-6 bg-white p-6  text-gray-600 rounded-md shadow-lg" initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 1, type: "spring", damping: 13 },
            }}>   {myText.map((el,i)=><span className="block" key={i}
            
            
          >{el}.</span>)}</motion.p>
          
   
         
          <div className="mt-3">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 1.4,
                  duration: 0.7,
                  type: "spring",
                  damping: 13,
                },
              }}
              className="mr-3 px-6 py-2 text-xs sm:text-sm"
            >
             <a href={element.demo} target='_blank'>DEMO</a> 
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 1.6,
                  duration: 0.7,
                  type: "spring",
                  damping: 13,
                },
              }}
              className="px-6 py-2 text-xs sm:text-sm"
            >
            <a target='_blank' href={element.code}>  CODE</a>
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 1.3,
              duration: 1.7,
              type: "spring",
              damping: 13,
            },
          }}
          className="flex-1 pb-1 min-w-[250px] shadow-gray-600 shadow-md rounded-md pt-2 lg:self-start "
        >
          <p className="uppercase p-1 text-center text-gray-700 font-medium">
            technologies
          </p>
          <div className="mt-1 px-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 py-2">
            {element.techStack.map((el,i)=><div key={i} className="flex gap-2  items-center mt-3">
              <span className="text-violet-500">
                <RiRadioButtonFill />
              </span>{" "}
              <span className="lg:text-sm uppercase text-[10px] text-gray-700">{el}</span>
            </div>)}
            
            
          </div>
        </motion.div>
      </div>

      <Link
        
        className="w-10 h-10 flex items-center justify-center  mx-auto mt-4 sm:mt-12 "
        href="/#projects"
      >
        <motion.span
          className="w-10 h-10  flex items-center justify-center rounded-full shadow-gray-700 shadow-md hover:scale-105 duration-300 text-violet-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 1, type: "spring", damping: 13 },
          }}
        >
          <TbArrowBack size={20} />
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default ProjectId;

export async function getStaticPaths() {
  console.log("data");
  const { data } = require("../components/data");

  const paths = data.map((el) => ({ params: { project: el.id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { data } = require("../components/data");

  const project = context.params.project.toString();
  console.log("theData", data);
  const element = data.find((el) => el.id === project);

  return {
    props: { element },
  };
}
