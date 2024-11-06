import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className=" bg-cover bg-center bg-[#9538E2]  flex w-[1540px] h-[594px]   mx-auto 
        flex-col justify-center items-center text-white p-8 ">
        <h1 className="text-4xl font-bold mb-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className="mb-6 text-lg">Explore the latest gadgets that will take your experience to the next level. 
            From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-white text-[#9538E2] py-2 px-4 rounded-full hover:bg-yellow-400 font-semibold"
        >
          Shop Now
        </button>


        <div
        className="  z-10 bottom-0  bg-cover bg-no-repeat rounded-3xl flex flex-col 
                       items-center justify-center mx-auto  w-[1110px] h-auto md:h-[35.5rem] 
                       lg:h-[510px] lg:p-12 space-y-6 text-center shadow-lg transition transform 
                       hover:scale-105 hover:translate-y-1 duration-300 ease-in-out border-8
                        border-gray-100 absolute -mb-24 "
        style={{
            backgroundImage: 'url(https://i.ibb.co.com/rMZmNfg/banner.jpg)',
        }}
    >
          
    </div>
      </div>
    );
};

export default Banner;