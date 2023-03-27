import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from 'yup'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

import { RxDoubleArrowUp } from "react-icons/rx";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../title/Title";







const Contact = () => {

  const form = useRef();


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
     
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Username is required"),
        
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      message: Yup.string()
        .required("message is required")
        .min(6, "message must have at least 6 characters")
        .max(50, "Max password length is 50"),
     
    }),
    onSubmit(values,actions) {
      emailjs.sendForm('service_nijsfmd', 'template_kl0h26r', form.current, 'xc--zoDVhCQiWZsjE')
      .then((result) => {
          console.log(result.text);
          actions.resetForm()
          toast.success('Successfully sent! ')
      }, (error) => {
          console.log(error.text);
          toast.error("Something went wrong! Please try again ")
          actions.setSubmitting(false)
      });
      
    
      
    
    }
  });

  const rubber=()=>{
    return {transform:['scale3d(1,1,1)','scale3d(1.4,.55,1)','scale3d(.75,1.25,1)','scale3d(1.25,.85,1)','scale3d(.9,1.05,1)','scale3d(1,1,1)']}
      
    
  }
  
  return (
    <div style={{backgroundImage:'url("/assets/BG.webp")', backgroundAttachment:'fixed',backgroundSize:'cover'}}
      className="min-h-screen relative pt-32 px-2 lg:px-10 section pb-8 "
      id="contact"
    >
      <div className='absolute top-0 left-0 w-full h-full  bg-white/70 z-[0] backdrop-blur-[12px]' />
      <div className="relative z-10">
        <div  initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.6,duration:0.8}}} >
      <Title title1={'contact'} title2='get in touch' />
        </div>
  

      <div className="flex flex-col w-full lg:flex-row gap-4 max-w-[1200px] mx-auto mt-5">
        <motion.div initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:1,type:'spring',damping:13}}} className="flex-1 flex flex-col gap-3 p-4 shadow-md shadow-gray-700 rounded-lg pb-8 ">
          <div className="p-2 overflow-hidden shadow-md shadow-gray-500 rounded-lg">
          <div className="overflow-hidden aspect-video rounded-lg w-full relative p-3 bg-red-200 z-[30]  ">
            <Image
            fill
              src="/assets/Labtop.jpeg"
              alt="img"
              className="hover:scale-110 duration-300  rounded-lg "
            />
          </div>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <h3 className="capitalize text-violet-700 ">ammar haidar</h3>
            <p className="capitalize text-sm font-bold tracking-wider">front-end developer</p>
            <p className="text-sm">
              I am available for freelance or full-time positions.Contact me and
              let,s talk.
            </p>
          </div>
          <div className="mt-auto ">
            <p className="capitalize font-bold">contact with me</p>
            <div className="flex items-center mt-8 justify-between">
              <motion.a target={'_blank'} href="https://www.linkedin.com/in/ammar-haidar-569344223" whileHover={()=>rubber()} className="p-3 rounded-full shadow-lg shadow-gray-500  text-violet-700 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
                <FaLinkedinIn />
              </motion.a>
              <motion.a target={'_blank'}  href="https://www.github.com/ammar-1990" whileHover={()=>rubber()} className="p-3 rounded-full shadow-lg shadow-gray-500 text-violet-700 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
                <ImGithub />
              </motion.a>
              <motion.a target={'_blank'} href="mailto:ammar.ali.haidar.1990@gmail.com" whileHover={()=>rubber()} className="p-3 rounded-full shadow-lg shadow-gray-500 text-violet-700 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
                <MdEmail />
              </motion.a>
              <motion.a whileHover={()=>rubber()} className="p-3 rounded-full shadow-lg shadow-gray-500 text-violet-700 flex items-center cursor-pointer justify-between duration-200 hover:scale-105 hover:shadow-gray-700">
                <BsFillPersonLinesFill />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1,delay:1,type:'spring',damping:13}}}  className="flex-[3]   p-4 shadow-md shadow-gray-700  rounded-lg pb-8  ">
          <form ref={form} className="flex relative z-[30] flex-wrap justify-between w-full" autoComplete="none" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col sm:mt-0 mt-8 gap-3 w-full  ">
              <label      onBlur={formik.handleBlur} className={`${formik.errors.name && formik.touched.name ? 'text-red-500' :"text-gray-700" } uppercase text-xs`}>Name*</label>
              <input
              id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                type="text"
                className={`input ${formik.errors.name && formik.touched.name ? 'border-red-300' :"border-gray-300" }
                ${formik.errors.name && formik.touched.name ? 'hover:border-red-500' :"hover:border-gray-400" }`}
                name="name"
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name && <p className="text-red-500">{formik.errors.name}</p> }
            </div>
         
            <div className="flex mt-8 flex-col gap-3 w-[100%] ">
              <label      onBlur={formik.handleBlur} className={`${formik.errors.email && formik.touched.email ? 'text-red-500' :"text-gray-700" } uppercase text-xs`}>E-mail*</label>
              <input
              
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                id="email"
                className={`input  ${formik.errors.email && formik.touched.email ? 'border-red-300' :"border-gray-300" }
                ${formik.errors.email && formik.touched.email ? 'hover:border-red-500' :"hover:border-gray-400" }
                bg-white`}
                name="email"
                onBlur={formik.handleBlur}
              />
                {formik.errors.email && formik.touched.email && <p className="text-red-500">{formik.errors.email}</p> }
            </div>
          
            <div className="flex flex-col mt-8 gap-3 w-[100%] ">
              <label      onBlur={formik.handleBlur} className={`${formik.errors.message && formik.touched.message ? 'text-red-500' :"text-gray-700" } uppercase text-xs`}>message*</label>
              <textarea
              id="message"
                type="text"
                className={`input ${formik.errors.message && formik.touched.message ? 'border-red-300' :"border-gray-300" }
                ${formik.errors.message && formik.touched.message ? 'hover:border-red-500' :"hover:border-gray-400" }`}
                rows={10}
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
                {formik.errors.message && formik.touched.message &&<p className="text-red-500">{formik.errors.message}</p> }
            </div>
            <button disabled={formik.isSubmitting} type="submit" className="uppercase btn mt-4 w-full text-gray-100 p-4">
              {formik.isSubmitting?(<div className="flex w-full justify-center items-center gap-3"><span className="text-white">sending</span> <span className="w-4 h-4 rounded-full borders animate-spin"></span></div>)  :"send message"}
            </button>
           
          
          </form>
        </motion.div>
      </div>
      <Link  className="mx-auto block w-10 h-10" href="/#home">
        <motion.div whileHover={()=>rubber()} className="flex hover:scale-105 duration-300  hover:shadow-gray-700 text-violet-700 items-center justify-between p-3  shadow-gray-500  shadow-lg cursor-pointer mx-auto  w-10 h-10 rounded-full mt-6 ">
          <RxDoubleArrowUp />
        </motion.div>
      </Link>
      </div>
      <Toaster  position="bottom-center" toastOptions={{duration:7000,style:{backgroundColor:'rgb(109 40 217)',color:'white',fontSize:"1rem"}}}/>
    </div>
  );
};

export default Contact;
