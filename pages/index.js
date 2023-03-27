import Head from "next/head"
import { motion,AnimatePresence } from "framer-motion"
import About from "@/components/about/about"
import Skills from "@/components/skills/skills"
import Projects from "@/components/projects/projects"
import Contact from "@/components/contact/contact"
import HomeSection from "@/components/home/HomeSection"
import { useRouter } from "next/router"
import { useEffect ,useRef,useState} from "react"
import Link from "next/link"
import { redirect } from "next/dist/server/api-utils"




export default function Home() {
  const router=useRouter()






 
  return (
   
   <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7, duration:0.8}} >
<Head>
  <title>
    Ammar | Frondend Developer
  </title>
</Head>

<div>


<HomeSection />
<About />
<Skills />
<Projects />
<Contact/>





</div>

  </motion.div>
  
     
  )
}
