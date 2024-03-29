import { AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
 
  return (
  
  <Layout >

  <Component {...pageProps} />

  </ Layout>
  ) 
}
