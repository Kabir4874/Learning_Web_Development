const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 bg-transparent w-full px-40 flex items-center justify-between py-3 z-10">
        <div className="logo">
          <a href="#" className=" text-white text-[20px] font-bold">
            ByFaith
          </a>
        </div>
        <ul className=" flex gap-16 text-[rgba(255,255,255,0.8)]">
          <li>
            <a href="#" className=" hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-white">
              Sermons
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-white">
              Ministries
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-white">
              Events
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
