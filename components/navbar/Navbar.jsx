import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'
const data =[
    {
    id:'1',
    name:'home',
    to:'/'
},
    {
    id:'2',
    name:'about',
    to:'/about'
},
    {
    id:'3',
    name:'skills',
    to:'/skills'
},
    {
    id:'4',
    name:'projects',
    to:'/projects'
},
    {
    id:'5',
    name:'contact',
    to:'/contact'
},
]

const Navbar =()=> {
const [active,setActive]=useState('home')
const [open,setOpen]=useState(false)

    return (
<div className='fixed h-20 w-full shadow-md'>
    
    <div className="p-2 lg:p-10 h-full flex justify-between items-center">
        <Link onClick={()=>setActive('home')} href='/'>
<Image alt="img" src={'/assets/Logo.png'}  width={ 125} height={100}/>
</Link>
        <ul className="hidden md:flex items-center gap-10">
{data.map(el=><Link onClick={()=>setActive(el.name)} key={el.id} href={el.to}><li className={`uppercase hover:text-purple-700 font-medium transition duration-300 text-sm ${active===el.name && 'text-purple-700'}`}>{el.name}</li></Link>)}
        </ul>

        <span className="flex items-center justify-center md:hidden cursor-pointer text-[#1f2937] " onClick={()=>setOpen(true)}><RxHamburgerMenu size={'30px'}  /></span>
    </div>

    <div className={`fixed top-0 lef-0 w-full h-full bg-black ${open?'block':'hidden'} opacity-70 transition duration-300`}></div>
    <div className={`fixed top-0 ${open? 'left-0' :'left-[-100%]' }  p-8 bg-[#ecf0f3] h-screen w-[300px] sm:w-[375px] transition-all duration-500 ease-in `}>
        <div className='border-b border-gray-300'>
       <div className="flex justify-between items-center ">
        <Image alt='img' src={'/assets/Logo.png '}  width={87} height={35}/>
        <span className="flex justify-center items-center cursor-pointer w-10 h-10 rounded-full shadow-lg shadow-gray-400" onClick={()=>setOpen(false)}><IoMdClose /></span>
       </div>
       <p className="my-6 text-gray-800 text-xs sm:text-base">Let,s build something awesome together</p>
       </div>

       <ul className="mt-8 flex flex-col gap-5">
        {data.map(el=><li className="uppercase cursor-pointer font-medium text-gray-700" key={el.id}>{el.name}</li>)}
       </ul>
    </div>

</div>
    )
}

export default Navbar