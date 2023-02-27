import Image from "next/image"
import Link from "next/link"
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

    return (
<div className='fixed h-20 w-full'>
    <div className="p-2 lg:p-10 h-full flex justify-between items-center">
<Image alt="img" src={'/assets/Logo.png'}  width={ 125} height={100}/>
        <ul className="hidden md:flex gap-10">
{data.map(el=><Link key={el.id} href={el.to}><li className="uppercase font-medium">{el.name}</li></Link>)}
        </ul>
    </div>

</div>
    )
}

export default Navbar