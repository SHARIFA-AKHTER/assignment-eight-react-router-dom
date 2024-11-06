import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";


const Root = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-232px)] ">
            <Navbar></Navbar>
         
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;