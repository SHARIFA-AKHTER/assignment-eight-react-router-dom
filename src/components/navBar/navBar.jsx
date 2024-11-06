
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
     <li><NavLink to={"/"}>Home</NavLink></li>
     <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
     <li><NavLink to={"/dashboard"}> Dashboard</NavLink></li>

     <div> 
     <li className='gap-8 ml-4'>
        <NavLink>
        <i class="fa-solid fa-cart-shopping"></i>
       <span className="bg-red-400 rounded-full px-2 py-1 ml-6 text-xs ">
                <i class="fa-solid fa-heart"></i></span>
        </NavLink>
     
        
     </li>
     </div>
    </>
    return (
        <div className="navbar bg-[#9538E2] w-[1540px]  h-[110px]
        flex justify-center items-center mx-auto p-8 ">
        <div className="navbar-start  ">
          
          <a className="btn btn-ghost text-xl">GadgetHaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
       
      </div>
    );
};

export default Navbar;