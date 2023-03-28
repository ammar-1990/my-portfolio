import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/router";
import { motion ,AnimatePresence} from "framer-motion";
const data = [
  {
    id: "1",
    name: "home",
    to: "/#home",
  },
  {
    id: "2",
    name: "about",
    to: "/#about",
  },
  {
    id: "3",
    name: "skills",
    to: "/#skills",
  },
  {
    id: "4",
    name: "projects",
    to: "/#projects",
  },
  {
    id: "5",
    name: "contact",
    to: "/#contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [white,setWhite]=useState(false)

  useEffect(() => {
   
    const setShadowTrue = () => {
      if (window.scrollY > 60) setShadow(true);
      else {
        setShadow(false);
      }
    };
    document.addEventListener("scroll", setShadowTrue);
    setShadowTrue();

    return () => removeEventListener("scroll", setShadowTrue);
  }, []);

  useEffect(() => {
   if(router.pathname==='/'){
  
    setActive(
      router?.asPath?.slice(2) === "" ? "home" : router?.asPath?.slice(2)
    );
setWhite(false)

  

   }
   else{
    setWhite(true)
    setActive(null)
   
   }

    const sections = () => {
      let height = screen.availHeight;

      let top = screenTop;

      let all = [...document.querySelectorAll(".section")];
      all.forEach((el) => {
        let size = el.getBoundingClientRect();
        if (size.top >= top && size.top <= height / 2) {
          // history.pushState("", "", `#${el.id}`);
          window.location.hash = el.id;
          // history.pushState({}, "", `#${el.id}`)
          
          setActive(el.id);
         
         
        }
        else if(size.bottom >=  height / 2 && size.bottom <= height)
    {   
      //  history.pushState("", "", `#${el.id}`);
      window.location.hash = el.id;
      // history.pushState({}, "", `#${el.id}`)
        setActive(el.id);}
      });
    };
    document.addEventListener("scroll", sections);


    
    
    return () => removeEventListener("scroll", sections);
  }, [router.pathname]);
// 

  return (
    <div   className={`fixed h-20 w-screen  top-0  ${shadow && ("shadow-md bg-[#ecf0f3] bg-opacity-60 ")} duration-300 z-40 overflow-hidden`}>
      <div  className={`p-2 overflow-hidden w-screen px-4 lg:p-10 h-20 flex justify-between items-center ${shadow && 'backdrop-blur-md'} ${(shadow&&white)? "text-gray-600 ":white?'text-white':'text-gtay-600'}`}>
        <motion.div initial={{x:-40,opacity:0}} animate={{x:0,opacity:1,transition:{duration:1.5}}}> 
        <Link  onClick={() => setActive("home")} href="/#home">
          <Image priority alt="img" src={"/assets/Images/Logo.png"} width={100} height={100} />
        </Link>
        </motion.div>
        <motion.ul initial={{x:40,opacity:0}} animate={{x:0,opacity:1,transition:{duration:1.5}}}  className="hidden md:flex items-center h-20">
          {data.map((el,index) => (
          
              <li   
             
              key={el.id} 
                className={`uppercase  h-20 flex relative items-center cursor-default justify-center px-6 font-medium transition duration-300 text-[11px] ${
                  active === el.name && "active"
                }`}
              >
                  <Link className="hover:text-violet-700 duration-300 font-[700]"  href={el.to}>

                {el.name}
                </Link>
                {active=== el.name && <motion.div layoutId="underline" className="line"></motion.div>}
              </li>
           
          ))}
        </motion.ul>

        <motion.span initial={{x:40,opacity:0}} animate={{x:0,opacity:1,transition:{duration:1.5}}}
          className={`flex items-center justify-center md:hidden cursor-pointer  ${(shadow&&white)? "text-gray-600":white?'text-white':'text-gtay-600'} `}
          onClick={() => setOpen(true)}
        >
          <RxHamburgerMenu size={"20px"} />
        </motion.span>
      </div>
      <AnimatePresence>
        {open &&   <motion.div
      initial={{opacity:0}}
      animate={{opacity:0.7}}
      exit={{opacity:0}}
        className={`fixed top-0 lef-0 w-full h-full bg-black
          
         md:hidden opacity-70 transition duration-300`}
      ></motion.div>}
    </AnimatePresence>
   
      <div
        className={`fixed top-0 ${
          open ? "left-0" : "left-[-100%]"
        }  md:hidden  p-8 bg-[#ecf0f3] h-screen w-[300px] ease-linear sm:w-[375px] transition-all duration-500  flex flex-col`}
      >
        <div className="border-b border-gray-300">
          <div className="flex justify-between items-center ">
            <Link scroll={false} href='/#home' onClick={()=>setOpen(false)}><img  alt="img" className="w-24" src={"/assets/Images/Logo.png "}  /></Link>
            
            <span
              className="flex justify-center items-center cursor-pointer w-10 h-10 rounded-full shadow-lg hover:scale-105 duration-200 shadow-gray-400 hover:shadow-gray-700"
              onClick={() => setOpen(false)}
            >
              <IoMdClose />
            </span>
          </div>
          <p className="my-6 text-gray-800 text-xs sm:text-base">
            Let,s build something awesome together
          </p>
        </div>

        <ul className="mt-8 flex flex-col gap-5">
          {data.map((el) => (
            <li className="cursor-default"
                key={el.id}>
              <Link
                onClick={() => {
                  setActive(el.name);
                  setOpen(false);
                }}
            
                className={`uppercase  hover:text-violet-700 text-md duration-300 ${
                  active === el.name ? "text-violet-700" : "text-gray-700 text-xs md:text-sm"
                } cursor-pointer font-medium `}
                href={el.to}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          {" "}
          <p className="uppercase text-violet-700 tracking-widest font-medium">
            Let,s conect
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <a target={'_blank'} href="https://www.linkedin.com/in/ammar-haidar-569344223" className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <FaLinkedinIn />
          </a>
          <a target={'_blank'}   href="https://www.github.com/ammar-1990" className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <ImGithub />
          </a>
          <a target={'_blank'} href="mailto:ammar.web.mobile@gmail.com" className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <MdEmail />
          </a>
          <a href="/assets/Ammar-Haidar-CV.pdf" download={true} className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
            <BsFillPersonLinesFill />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
