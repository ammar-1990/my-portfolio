import Ability from "../ability/Ability"
import { motion } from "framer-motion"


import Certificate from "../certificate/Certificate"

const theSkills = [
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
    level:'85%'
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
    level:'85%'
  },
  {
    id:'a6',
    name:'React JS',
    img:'/assets/React.png',
    level:'85%'
  },
  {
    id:'a7',
    name:'Redux Toolkit',
    img:'/assets/Redux.png',
    level:'85%'
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
    level:'85%'
  },
  {
    id:'a11',
    name:'Sass',
    img:'/assets/Sass.png',
    level:'75%'
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
    level:'75%'
  },
  {
    id:'a14',
    name:'FireBase',
    img:'/assets/FireBase.png',
    level:'70%'
  },
]

const certificates =[
  {
    id:'c1',
    name:'google project management',
    icon:'/assets/google.png',
    img:'/assets/googleCertificate.jpg',
    link:'https://www.coursera.org/account/accomplishments/specialization/certificate/AY8F2BJLHAB5'
  },
  {
    id:'c2',
    name:'meta frontend development',
    icon:'/assets/meta.png',
    img:'/assets/metaCertificate.jpg',
    link:'https://www.coursera.org/account/accomplishments/specialization/certificate/A3MKYTPLGJ28'
  },
]


const Skills = () => {

  const parent ={
    view:{transition:{
      staggerChildren:0.15,
      delayChildren:0.8
    }}
  }
  return (
    <div className=" pt-32 px-2 lg:px-10 section" id="skills">
      <motion.div className="mb-20"  initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.5,duration:0.4}}}>
      <p className="text-purple-600 uppercase my-6 font-medium tracking-widest">skills</p>
 <h3 className="uppercase text-gray-600">what i can do</h3>
      </motion.div>

 <motion.div variants={parent} initial='start' whileInView='view' className="grid sm:grid-cols-2 md:grid-cols-4 max-w-[1200px] mx-auto w-full mt-5 gap-4">
{theSkills.map(el=><Ability key={el.name} name={el.name} img={el.img} level={el.level} />)}
 </motion.div>


 <motion.h3 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.5,duration:0.4}}} className="uppercase text-gray-600 mt-32">additional certificates</motion.h3>

 <div  className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-2 gap-6 sm:px-6 mt-14"> 
 {certificates.map(el=> <Certificate key={el.id} data={el}/>)}
 </div>

    </div>
  )
}

export default Skills