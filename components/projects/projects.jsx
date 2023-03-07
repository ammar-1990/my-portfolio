import Project from "../project/Project"
import Link from "next/link"

export const data =[
  {id:'1', name:'fitness compass', img:'/assets/compass-fitness.png',pull:true,},
  {id:'2', name:'e-commerce', img:'/assets/js-e-commerce.png',pull:false,},
  {id:'3', name:'lost pets', img:'/assets/lost-pets.png',pull:false,},
  {id:'4', name:'react e-commerce', img:'/assets/yellow-e-commerce.png',pull:true,},
  {id:'5', name:'fitness club', img:'/assets/fitness-club.png',pull:true,},
  {id:'6', name:'admin dashboard', img:'/assets/dashboard.png',pull:false,},
  {id:'7', name:'todo list', img:'/assets/todo-list.png',pull:false,},
  {id:'8', name:'redux e-commerce', img:'/assets/redux-e-commerce.png',pull:true,},
  {id:'9', name:'netflix clone', img:'/assets/netflix-clone.png',pull:true,},
  {id:'10', name:'facebook clone', img:'/assets/facebook-clone.png',pull:false,},
  {id:'11', name:'real estate', img:'/assets/real-estate.png',pull:true,},
]

const Projects = () => {
  return (
    <div className=" pt-16 px-2 lg:px-10 section min-h-screen"  id="projects">
      <p className="text-purple-600 uppercase my-6 font-medium tracking-widest">projects</p>
      <h3 className="text-gray-600 uppercase ">What I have built</h3>
      <div className="mt-4 max-w-[1200px] w-full mx-auto grid md:grid-cols-2 gap-6 sm:px-6">
{data.sort((a,b)=>(b.id-a.id)).map(el=><Project key={el.id} id={el.id}  name={el.name} img={el.img}  pull={el.pull}/> )}

      </div>
    </div>
  )
}

export default Projects