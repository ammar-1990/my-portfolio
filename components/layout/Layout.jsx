import Navbar from "../navbar/Navbar"

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <main className="h-full ">{children}</main>
    </>
  )
}

export default Layout