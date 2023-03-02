import Head from "next/head"

import About from "@/components/about/about"
import Skills from "@/components/skills/skills"
import Projects from "@/components/projects/projects"
import Contact from "@/components/contact/contact"
import HomeSection from "@/components/home/HomeSection"




export default function Home() {
  return (
   <div >
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

  </div>
     
  )
}
