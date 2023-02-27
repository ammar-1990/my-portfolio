import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
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

    return (
<div className='fixed h-20 w-full shadow-md'>
    
    <div className="p-2 lg:p-10 h-full flex justify-between items-center">
        <Link onClick={()=>setActive('home')} href='/'>
<Image alt="img" src={'/assets/Logo.png'}  width={ 125} height={100}/>
</Link>
        <ul className="hidden md:flex items-center gap-10">
{data.map(el=><Link onClick={()=>setActive(el.name)} key={el.id} href={el.to}><li className={`uppercase hover:text-indigo-400 font-medium transition duration-300 text-sm ${active===el.name && 'text-purple-700'}`}>{el.name}</li></Link>)}
        </ul>
    </div>

</div>
    )
}

export default Navbar