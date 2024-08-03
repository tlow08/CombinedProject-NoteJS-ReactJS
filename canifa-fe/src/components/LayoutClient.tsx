import { Outlet } from "react-router-dom"
import Header from "./layouts/Header"


const LayoutClient = () => {
  return (
    <>
    <Header />
    <div>
        <Outlet />
    </div>
    </>
  )
}

export default LayoutClient