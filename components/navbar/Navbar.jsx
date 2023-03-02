import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"

import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'
import { useRouter } from "next/router"
const data =[
    {
    id:'1',
    name:'home',
    to:'#home'
},
    {
    id:'2',
    name:'about',
    to:'#about'
},
    {
    id:'3',
    name:'skills',
    to:'#skills'
},
    {
    id:'4',
    name:'projects',
    to:'#projects'
},
    {
    id:'5',
    name:'contact',
    to:'#contact'
},
]

const Navbar =()=> {
    const router=useRouter()
const [active,setActive]=useState('')
const [open,setOpen]=useState(false)
const [back,setBack]=useState(false)

useEffect(()=>{
 
    setActive(router?.asPath?.slice(2)===''?'home': router?.asPath?.slice(2))
const setBackTrue=()=>{
  
   

    if(window.scrollY>5)
    setBack(true)
    else{
        setBack(false)
    }
}
    document.addEventListener('scroll',setBackTrue)
    setBackTrue()

    return ()=> removeEventListener('scroll',setBackTrue)
},[])


useEffect(()=>{

    const sections=()=>{
        let height =screen.availHeight
      
        let top =screenTop
      
        let all=[...document.querySelectorAll(".section")]
        all.forEach((el)=>{
            let size = el.getBoundingClientRect()
            if(size.top >= top && size.top <= height/2)
            {
            
       
        
 
            history.pushState('','',`#${el.id}`)
              setActive(el.id)
             
            
           
            }
          
        })
    }
document.addEventListener('scroll',sections)


return ()=>removeEventListener('scroll',sections)

},[])




    return (
<div className={`fixed h-20 w-full shadow-md  ${back &&'bg-[#ecf0f3]'}`}>

    
    <div className={`p-2 lg:p-10 h-full flex justify-between items-center`}>
        <a onClick={()=>setActive('home')} href='#home'>
<Image alt="img" src={'/assets/Logo.png'}  width={ 125} height={100}/>
</a>
        <ul className="hidden md:flex items-center gap-10">
{data.map(el=><a key={el.id} href={el.to}><li className={`uppercase hover:text-purple-700 font-medium transition duration-300 text-sm ${active===el.name && 'active'}`}>{el.name}</li></a>)}
        </ul>

        <span className="flex items-center justify-center md:hidden cursor-pointer text-[#1f2937] " onClick={()=>setOpen(true)}><RxHamburgerMenu size={'30px'}  /></span>
    </div>

    <div className={`fixed top-0 lef-0 w-full h-full bg-black ${open?'block':'hidden'} md:hidden opacity-70 transition duration-300`}></div>
    <div className={`fixed top-0 ${open? 'left-0' :'left-[-100%]' }  md:hidden  p-8 bg-[#ecf0f3] h-screen w-[300px] sm:w-[375px] transition-all duration-500 ease-in flex flex-col`}>
        <div className='border-b border-gray-300'>
       <div className="flex justify-between items-center ">
        <Image alt='img' src={'/assets/Logo.png '}  width={87} height={35}/>
        <span className="flex justify-center items-center cursor-pointer w-10 h-10 rounded-full shadow-lg hover:scale-105 duration-200 shadow-gray-400" onClick={()=>setOpen(false)}><IoMdClose /></span>
       </div>
       <p className="my-6 text-gray-800 text-xs sm:text-base">Let,s build something awesome together</p>
       </div>

       <ul className="mt-8 flex flex-col gap-5">
        {data.map(el=><a key={el.id} href={el.to}><li onClick={()=>{setActive(el.name);setOpen(false)}} className={`uppercase text-sm hover:text-purple-700 duration-300 ${active===el.name? 'text-purple-700' : 'text-gray-700'} cursor-pointer font-medium `} >{el.name}</li></a>)}
       </ul>
<div className="mt-auto"> <p className='uppercase text-purple-700 tracking-widest font-medium'>Let,s conect</p></div>
      <div className="mt-3 flex items-center justify-between">
<span className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105">
    <FaLinkedinIn />
</span>
<span className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105"><ImGithub/></span>
<span className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105"><MdEmail/></span>
<span className="p-3 rounded-full shadow-lg shadow-gray-400 flex items-center cursor-pointer justify-between duration-200 hover:scale-105"><BsFillPersonLinesFill /></span>
      </div>
    </div>

</div>
    )
}

export default Navbar