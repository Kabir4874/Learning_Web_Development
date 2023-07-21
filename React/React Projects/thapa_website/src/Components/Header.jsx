import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"


const Header = () => {
  return (
    <>
        <NavLink to={"/"}>
            <img src="/images/logo.png" alt="logo" />
        </NavLink>
        <Navbar/>
    </>
  )
}

export default Header