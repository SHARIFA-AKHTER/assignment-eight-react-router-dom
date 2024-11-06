
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetail = () => {
    const{product_id} = useParams();

    const data = useLoaderData();

    const id = parseInt(product_id);

    const gadget = data.find(gadget => parseInt(gadget.product_id) === id);
   
    const {product_id: currentProduct_id,product_image,
        product_title,price,description,specification,rating} = gadget;

        const handleAddToCard = () =>{

           
        }

    return (

        <div className="hero bg-base-100 w-[1280px] h-[676px]  j">
  <div className="hero-content flex-col lg:flex-row mt-32">
    <img
      src={product_image}
      className="max-w-sm rounded-lg shadow-2xl w-72" />
    <div className=' '>
      <h1 className="text-4xl font-bold ">{product_title}</h1>
      <p>Price:{price}</p>
      <button className='btn bg-green-100 rounded-full shadow-md 
      outline-green-400'>In Stock</button>
      <p>{description}</p>
        <div className='flex flex-col items-start gap-2'>
        {specification.map((spec, index) => (
        <span key={index} className="badge badge-outline">{spec}</span>
         ))}
        </div>
         <p>
            Rating
         <span className='text-orange-200'><i class="fa-regular fa-star"></i></span>
     </p>
     <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2" />
  
  {rating}
    </div>
  
      
    <div>
    <button onClick={handleAddToCard} className="btn  rounded-full
             bg-[#9538E2] text-white mr-4">
                Add to Card
                <i class="fa-solid fa-cart-shopping"></i>
                </button>
            <button className="btn bg-slate-300  rounded-full 
             border-2">
            <i class="fa-regular fa-heart"></i>
            </button>
    </div>
    </div>
  </div>
</div>

    );
};

export default GadgetDetail;