import Image from "next/image";

import { useCountUp } from "react-countup";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Ability = ({ name, img, level,color }) => {
  const countUpRef = useRef(null);
  const theLevel = level.slice(0, level.length - 1);
  const { countUp, start, reset } = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 0.5,
    suffix: "%",
    end: theLevel,
  });
  const [full, setFull] = useState(false);

  const item = {
    start: { y:-20, opacity: 0 },
    view: { y:0,opacity: 1 ,transition:{type:'spring',damping:5,delay:0.6}},
  };
  return (
    <motion.div
      variants={item}
      initial='start'
      whileInView='view'
      onMouseOver={() => {
        start();
        setFull(true);
      }}
      onMouseOut={() => {
        reset();
        setFull(false);
      }}
      className="flex relative min-h-[75px] sm:min-h-[150px] z-[0] items-center shadow-md shadow-gray-300 justify-center overflow-hidden gap-2 sm:gap-4 p-4 rounded-md cursor-pointer group "
    >
         <span
            className="opacity-0 mt-8 group-hover:mt-0 group-hover:opacity-100 duration-300 absolute sm:top-[40%] top-[35%] pointer-events-none left-[50%] text-[10px] sm:text-[12px] text-white font-medium z-10 translate-x-[-40%]"
            ref={countUpRef}
          ></span>
      <div className="relative w-[40%] aspect-video ">
        <Image
        priority
       
          src={img}
          fill
          alt="img"
          objectFit="contain"
          className="sm:w-26 sm:h-26  w-14 h-10 "
        />
      </div>

      <p className="font-medium text-gray-600 text-xs  md:text-base">
        {" "}
        {name}
      </p>
      <div
        className="absolute p-3 w-full h-full gap-3  top-0 left-0  backdrop-blur-[2.5px] opacity-0 group-hover:opacity-100 duration-200 text-white flex 
      flex-col items-center justify-center "
      >
        <div
          style={{ pointerEvents: "none" }}
          className=" h-[10px] sm:h-3 w-[90%] mt-8 opacity-0 group-hover:mt-0  group-hover:opacity-100   duration-200 border-[1px] absolute  rounded-[5px] border-white top-[55%] overflow-hidden z-[2] "
        >
         
          {level && (
            <div
              style={{ width: full ? `${theLevel}%` : "0" }}
              className={`h-full bg-white 
      w-[0]  duration-500   `}
            ></div>
          )}{" "}
        </div>

        <div  className={`absolute w-full h-full ${color} opacity-50 top-0 left-0   z-[1]`}>
     
        </div>
      </div>
    </motion.div>
  );
};

export default Ability;
