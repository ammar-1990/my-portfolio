import Navbar from "../navbar/Navbar"

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <main className="overflow-hidden ">{children}</main>
    </>
  )
}

export default Layout