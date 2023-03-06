import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

import {RxDoubleArrowUp} from 'react-icons/rx'

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 px-2 lg:px-10 section pb-8 " id="contact">
 <p className="text-purple-600 uppercase my-6 font-medium tracking-widest">contact</p>
 <h3 className="text-gray-600 uppercase ">get in touch</h3>

 <div className="flex flex-col w-full lg:flex-row gap-4 max-w-[1200px] mx-auto mt-5">

  <div className="flex-1 flex flex-col gap-3 p-4 shadow-md shadow-gray-500 rounded-lg pb-8">
    <div className="overflow-hidden rounded-lg w-full">
      <img src='/assets/Labtop.jpeg' alt="" className="hover:scale-110 duration-300 w-full rounded-lg " />
    </div> 
    <div className="flex flex-col gap-2 mt-8">
<h3 className="capitalize ">ammar haidar</h3>
<p  className="capitalize text-sm">front-end developer</p>
<p  className="text-sm">I am available for freelance or full-time positions.Contact me and let,s talk.</p>





    </div>
    <div className="mt-auto "><p>Contact with me</p>
    <div className="flex items-center mt-8 justify-between">
          <span className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105">
            <FaLinkedinIn />
          </span>
          <span className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105">
            <ImGithub />
          </span>
          <span className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105">
            <MdEmail />
          </span>
          <span className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105">
            <BsFillPersonLinesFill />
          </span>
        </div>
    </div>
   
  </div>
  <div className="flex-[3]   p-4 shadow-md shadow-gray-500  rounded-lg pb-8 ">
<form className="flex flex-wrap justify-between w-full">
  <div className="flex flex-col sm:mt-0 mt-8 gap-3 w-full sm:w-[49%] ">

    <label className="text-gray-700 uppercase text-xs" >Name</label>
    <input autoComplete="none" type='text' className="input" />
  </div>
  <div className="flex flex-col gap-3 w-full sm:w-[49%] ">

    <label className="text-gray-700 uppercase text-xs" >Phone Number</label>
    <input autoComplete="none" type='text' className="input" />
  </div>
  <div className="flex mt-8 flex-col gap-3 w-[100%] ">

    <label className="text-gray-700 uppercase text-xs">E-mail</label>
    <input autoComplete="none" type='email' className="input" />
  </div>
  <div className="flex flex-col mt-8 gap-3 w-[100%] ">

    <label className="text-gray-700 uppercase text-xs">Subject</label>
    <input autoComplete="none" type='text' className="input" />
  </div>
  <div className="flex flex-col mt-8 gap-3 w-[100%] ">

    <label className="text-gray-700 uppercase text-xs">message</label>
    <textarea  type='text' className="input " rows={10} />
  </div>
  <button className="uppercase mt-4 w-full text-gray-100 p-4">send message</button>

</form>
  </div>
 </div>
  <Link scroll={false} className="mx-auto block w-10 h-10"  href='/#home'>
<div className="flex hover:scale-105 duration-300 text-purple-700 items-center justify-between p-3  shadow-gray-700 shadow-md cursor-pointer mx-auto  w-10 h-10 rounded-full mt-6 ">
  <RxDoubleArrowUp />
</div>
  </Link>
    </div>
  )
}

export default Contact