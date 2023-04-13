import Ability from "../ability/Ability"
import { motion } from "framer-motion"


import Certificate from "../certificate/Certificate"
import Title from "../title/Title"

const theSkills = [
  {  
    id:'a1',
    name:'HTML',
    img:'/assets/Images/HTML.png',
    level:'90%',
    color:'bg-gradient-to-r from-red-500 to-red-900'
  },
  {
    id:'a2',
    name:'CSS',
    img:'/assets/Images/CSS.png',
    level:'90%',
    color:'bg-gradient-to-r from-blue-500 to-blue-900'
  },
  {
    id:'a3',
    name:'JavaScript',
    img:'/assets/Images/JS.png',
    level:'85%',
    color:'bg-gradient-to-r from-yellow-500 to-yellow-900'
  },
  {
    id:'a4',
    name:'Bootstrap',
    img:'/assets/Images/Bootstrap.png',
    level:'70%',
    color:'bg-gradient-to-r from-violet-500 to-violet-900'
  },
  {
    id:'a5',
    name:'Tailwind',
    img:'/assets/Images/Tailwind.png',
    level:'85%',
    color:'bg-gradient-to-r from-cyan-500 to-cyan-900'
  },
  {
    id:'a6',
    name:'React JS',
    img:'/assets/Images/React.png',
    level:'85%',
    color:'bg-gradient-to-r from-sky-500 to-sky-900'
  },
  {
    id:'a7',
    name:'Redux Toolkit',
    img:'/assets/Images/Redux.png',
    level:'85%',
    color:'bg-gradient-to-r from-violet-500 to-violet-900'
  },
  {
    id:'a8',
    name:'Chakra UI',
    img:'/assets/Images/chakra-ui.png',
    level:'70%',
    color:'bg-gradient-to-r from-teal-500 to-teal-900'
  },
  {
    id:'a9',
    name:'Materia UI',
    img:'/assets/Images/material-ui.png',
    level:'70%',
    color:'bg-gradient-to-r from-blue-500 to-blue-900'
  },
  {
    id:'a10',
    name:'Next JS',
    img:'/assets/Images/Next.png',
    level:'85%',
    color:'bg-gradient-to-r from-gray-500 to-gray-900'
  },
  {
    id:'a11',
    name:'Sass',
    img:'/assets/Images/Sass.png',
    level:'75%',
    color:'bg-gradient-to-r from-pink-500 to-pink-900'
  },
  {
    id:'a12',
    name:'NPM',
    img:'/assets/Images/NPM.png',
    level:'70%',
    color:'bg-gradient-to-r from-red-500 to-red-900'
  },
  {
    id:'a13',
    name:'Git Hub',
    img:'/assets/Images/Git hub.png',
    level:'75%',
    color:'bg-gradient-to-r from-gray-500 to-gray-900'
  },
  {
    id:'a14',
    name:'FireBase',
    img:'/assets/Images/FireBase.png',
    level:'70%',
    color:'bg-gradient-to-r from-yellow-500 to-yellow-900'
  },
  {
    id:'a15',
    name:'React Native',
    img:'/assets/Images/ReactNative.svg',
    level:'85%',
    color:'bg-gradient-to-r from-sky-500 to-sky-900'
  },
  {
    id:'a16',
    name:'Wordpress',
    img:'/assets/Images/wordpress.png',
    level:'80%',
    color:'bg-gradient-to-r from-sky-500 to-sky-900'
  },
]

const certificates =[
  {
    id:'c1',
    name:'google project management',
    icon:'/assets/Images/google.png',
    img:'/assets/Images/min.JPG',
    link:'https://www.coursera.org/account/accomplishments/professional-cert/AY8F2BJLHAB5'
  },
  {
    id:'c2',
    name:'meta frontend developer',
    icon:'/assets/Images/Meta.png',
    img:'/assets/Images/min2.JPG',
    link:'https://www.coursera.org/account/accomplishments/professional-cert/A3MKYTPLGJ28'
  },
  {
    id:'c3',
    name:'meta react native',
    icon:'/assets/Images/Meta.png',
    img:'/assets/Images/min3.JPG',
    link:'https://www.coursera.org/account/accomplishments/specialization/G8XCADNXZDGR'
  },
]


const Skills = () => {

 
  return (
    <div
     className="pb-4 pt-32 px-2 lg:px-10 section min-h-screen relative" id="skills">
     
      <div className="mb-20"  initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.5,duration:0.4}}}>
      <Title title1={'skills'} title2='what i can do' />
      </div>

 <div  className="grid grid-cols-2 md:grid-cols-4 max-w-[1200px] mx-auto w-full mt-5 gap-4">
{theSkills.map(el=><Ability key={el.name} color={el.color} name={el.name} img={el.img} level={el.level} />)}
 </div>


 <motion.h3 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.5,duration:0.4}}} className="uppercase text-gray-600 mt-32 relative">courses and certifications</motion.h3>

 <div  className="max-w-[1200px] w-full mx-auto gap-6 sm:px-6 mt-14 justify-center flex flex-wrap "> 
 {certificates.map(el=> <Certificate key={el.id} data={el}/>)}
 </div>

    </div>
  )
}

export default Skills