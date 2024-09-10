import { Outlet } from "react-router-dom"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"


const LayoutClient = () => {
  return (
    <>
    <Header />
    <div>
        <Outlet />
    </div>
    <Footer/>
    </>
  )
}

export default LayoutClient