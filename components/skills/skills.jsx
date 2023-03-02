import Ability from "../ability/Ability"



const data = [
  {  
    id:'a1',
    name:'HTML',
    img:'/assets/HTML.png',
    level:'90%'
  },
  {
    id:'a2',
    name:'CSS',
    img:'/assets/CSS.png',
    level:'90%'
  },
  {
    id:'a3',
    name:'JavaScript',
    img:'/assets/JS.png',
    level:'80%'
  },
  {
    id:'a4',
    name:'Bootstrap',
    img:'/assets/Bootstrap.png',
    level:'70%'
  },
  {
    id:'a5',
    name:'Tailwind',
    img:'/assets/Tailwind.png',
    level:'80%'
  },
  {
    id:'a6',
    name:'React JS',
    img:'/assets/React.png',
    level:'80%'
  },
  {
    id:'a7',
    name:'Redux Toolkit',
    img:'/assets/Redux.png',
    level:'80%'
  },
  {
    id:'a8',
    name:'Chakra UI',
    img:'/assets/chakra-ui.png',
    level:'70%'
  },
  {
    id:'a9',
    name:'Materia UI',
    img:'/assets/material-ui.png',
    level:'70%'
  },
  {
    id:'a10',
    name:'Next JS',
    img:'/assets/Next.png',
    level:'80%'
  },
  {
    id:'a11',
    name:'Sass',
    img:'/assets/Sass.png',
    level:'60%'
  },
  {
    id:'a12',
    name:'NPM',
    img:'/assets/NPM.png',
    level:'70%'
  },
  {
    id:'a13',
    name:'Git Hub',
    img:'/assets/Git hub.png',
    level:'60%'
  },
  {
    id:'a14',
    name:'FireBase',
    img:'/assets/FireBase.png',
    level:'50%'
  },
]

const Skills = () => {
  return (
    <div className=" pt-16 px-2 lg:px-10 section" id="skills">
 <p className="text-purple-600 uppercase my-6 font-medium tracking-widest">skills</p>
 <h3 className="uppercase text-gray-600">what i can do</h3>
 <div className="grid sm:grid-cols-2 md:grid-cols-4 max-w-[1200px] mx-auto w-full mt-5 gap-4">
{data.map(el=><Ability key={el.name} name={el.name} img={el.img} level={el.level} />)}
 </div>

    </div>
  )
}

export default Skills