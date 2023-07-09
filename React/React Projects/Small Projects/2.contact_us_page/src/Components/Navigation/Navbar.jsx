import style from "../Navigation/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${style.nav} container`}>
      <div className="logo">
        <img src="/public/image/logo.png" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
