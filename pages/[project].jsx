
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import {TbArrowBack} from 'react-icons/tb'


const ProjectId = ({element}) => {
  return (
    <div className='min-h-screen pb-8 '> 
    
    <div className='h-[30vh] lg:h-[40vh] overflow-hidden relative w-full'>
      <div className='absolute top-0  left-0 w-full h-full bg-black/70 z-10' />
      <img src={element.img} className={`${element.pull ?"sm:w-1/2" : 'w-auto '} ${!element.pull && 'md:w-1/2' } block mx-auto`} alt="" />
      <div className='absolute bottom-5 z-20 px-2 lg:px-10'>
<h3 className='text-white uppercase font-bold '>{element.name}</h3>

      </div>


    </div>

    <div className='mt-8 px-2 lg:px-10 flex flex-col gap-4 lg:flex-row'>

      <div className='flex-[3]  '>
<p className='uppercase text-purple-700 font-bold'>Project</p>
<h2 className='text-gray-600 mt-4'>OVERVIEW</h2>
<p className='md:w-[80%] mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto recusandae ab eos corrupti? Praesentium temporibus aperiam nihil corporis doloremque neque optio sint voluptates sequi ipsa, rerum vel vero consequuntur, accusamus enim. Modi delectus corporis omnis ullam, quo illum atque commodi officia. Quis, nemo eius et vero assumenda reiciendis repudiandae!</p>
<div className='mt-3'>
<button className='mr-3 px-6 py-2'>DEMO</button>
<button className='px-6 py-2'>CODE</button>

</div>
      </div>
      <div className='flex-1 pb-6 min-w-[250px] shadow-gray-600 shadow-md rounded-md'>

      <p className='uppercase p-2 text-center text-gray-700 font-medium'>technologies</p>
      <div className='mt-4 px-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-1 '>
<div className='flex gap-2  items-center mt-3'><RiRadioButtonFill  /> <span className='uppercase text-gray-700'>react</span></div>
<div className='flex gap-2  items-center mt-3'><RiRadioButtonFill  /> <span className='uppercase text-gray-700'>react</span></div>
<div className='flex gap-2  items-center mt-3'><RiRadioButtonFill  /> <span className='uppercase text-gray-700'>react</span></div>
<div className='flex gap-2  items-center mt-3'><RiRadioButtonFill  /> <span className='uppercase text-gray-700'>react</span></div>
<div className='flex gap-2  items-center mt-3'><RiRadioButtonFill  /> <span className='uppercase text-gray-700'>react</span></div>

      </div>
      </div>
    </div>

    <Link className='w-10 h-10  flex items-center justify-center  mx-auto mt-10 rounded-full shadow-gray-700 shadow-md hover:scale-105 duration-300 text-purple-700' href='/#projects'><TbArrowBack size={20}/></Link>
    </div>
  )
}

export default ProjectId


export async function getStaticPaths(){
  console.log('data')
const {data}=require('../components/data')

const paths=data.map(el=>({params:{project:el.id}}))




return {
  paths,
  fallback:false
}

}


export async function getStaticProps(context){
  const {data}=require('../components/data')
  
  const project=context.params.project.toString()
  console.log('theData',data)
const element = data.find(el=>el.id===project)

return{
  props:{element}
}

}