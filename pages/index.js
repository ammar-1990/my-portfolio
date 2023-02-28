import Head from "next/head"
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'





export default function Home() {
  return (
   <div >
<Head>
  <title>
    Ammar | Frondend Developer
  </title>
</Head>


<div className="w-full h-screen flex items-center justify-center">
  <div> <p className="text-gray-600 uppercase text-center text-sm mb-3">let,s build something together</p>
  <h1 className="text-center">Hi, I'm <span className="text-purple-700 ">Ammar</span></h1>
  <h1 className="text-center">A Front-End Developer</h1>
  <p className="mx-auto text-center w-[90%] sm:w-1/2 md:w-1/3 mt-4 text-gray-600">lorem20 asd nsanbd asbd jashdjk hasjhd jashjkah jdh jkash jkhasljdh jasld halskjhd jkashd lahsdjk haslkjd hajkshd ljkashd jkhaskjd halkjshd kjashdj hasj hlasjh djashd jkashd kjahsdj haslkjd haskjh dakjshd </p>


  <div className="mt-8 flex items-center w-[250px] sm:w-[350px] mx-auto justify-between">
<span className="sm:p-5 p-3 rounded-full text-purple-700 shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105">
    <FaLinkedinIn />
</span>
<span className="sm:p-5 p-3 rounded-full shadow-lg text-purple-700 shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105"><ImGithub/></span>
<span className="sm:p-5 p-3 rounded-full shadow-lg text-purple-700 shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105"><MdEmail/></span>
<span className="sm:p-5 p-3 rounded-full shadow-lg text-purple-700 shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105"><BsFillPersonLinesFill /></span>
      </div>
    </div>
  </div>
 



</div>


  
     
  )
}
