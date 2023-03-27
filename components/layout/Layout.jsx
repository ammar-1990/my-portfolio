import Navbar from "../navbar/Navbar"
import { AnimatePresence,motion } from "framer-motion"
import { useRouter } from "next/router"
import AnimeLayer from "../animeLayer/AnimeLayer"

const Layout = ({children}) => {
  
const router=useRouter()
  return (
    <>
    <AnimatePresence mode="wait">
    {router.pathname !=='/'&& <AnimeLayer />}
    </AnimatePresence>
    <Navbar />

    <motion.main key={router.pathname} className="overflow-hidden " >{children}</motion.main>
   
    </>
  )
}

export default Layout