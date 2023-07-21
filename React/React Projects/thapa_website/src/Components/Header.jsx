import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <Header>
        <NavLink to='/'>
            <img src="./images/logo.png" alt="logo" />
        </NavLink>
    </Header>
  )
}

export default Header