import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {

    const { product_image, product_title, price, product_id } = gadget;

    return (

        <div className="card  bg-base-100  shadow-xl
         p-6 transition-transform transform hover:scale-105">
        <figure className="px-10 pt-10 bg-blue-100 py-8 rounded-2xl ">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-xl h-[181px] object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-lg font-semibold">Price: ${price}</p>
          <Link to={`/gadgets/${ product_id }`}>
          <div className="card-actions">
            <button className="btn bg-white 
              text-[#9538E2] hover:bg-[#9538E2] hover:text-white 
              transition-colors">
                View Details
            </button>
          </div>
          </Link>
        </div>
      </div>
    
    );
};

export default Gadget;