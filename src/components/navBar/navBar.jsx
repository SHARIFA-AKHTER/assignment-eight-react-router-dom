import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  
  const navbarBgColor = location.pathname === '/' ? 'bg-[#9538E2] ' : 'bg-[#9538E2]';

  const links = (
    <>
      <div className="flex justify-center space-x-8">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li><NavLink to={"/listedGadgets"}>Dashboard</NavLink></li>
      </div>
      <div> 
     <li className='gap-8 ml-4 '>
        <NavLink>
        <i class="fa-solid fa-cart-shopping"></i>
       <span className="bg-red-400 rounded-full px-2 py-1 ml-6 text-xs ">
                <i class="fa-solid fa-heart"></i></span>
        </NavLink>
     
         
     </li>
     </div>
    </>
  );

  return (
    <div className={`navbar ${navbarBgColor}  max-w-[1540px] w-full h-[110px]  flex justify-center items-center mx-auto px-4`}>
      {/* Navbar Logo */}
      <div className="navbar-start">
        <a className="text-xl font-bold text-white">GadgetHaven</a>
      </div>

      {/* Centered Links */}
      <div className="navbar-center flex justify-center items-center">
        <ul className="menu menu-horizontal flex justify-center items-center px-1">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;