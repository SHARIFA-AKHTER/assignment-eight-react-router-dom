import React, {useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
   
    const [gadgets,setGadgets] = useState([])
    const[filteredGadgets,setFilteredGadgets] = useState([]);
    const[category,setCategory] = useState('all');
  
    
    useEffect(() => {
        fetch('./gadgetsData.json')
        .then((res) => res.json())
        .then((data) =>{
            setGadgets(data);
            setFilteredGadgets(data);
        });
       

    },[])

    const handleCategoryChange = (selectedCategory) =>{
        setCategory(selectedCategory);
        if(selectedCategory === 'all'){
          setFilteredGadgets(gadgets);
        }
        else{
          const filtered = gadgets.filter((gadget) =>gadget.category === selectedCategory);
          setFilteredGadgets(filtered)
        }
    
      }
       
    return (

       
        <div className=' flex-grow flex justify-center items-center mt-8'>

         <div className='flex space-x-6 mb-6  m-6  '>
        
         
        <div className='flex flex-col items-center
         bg-slate-100 space-y-4 py-4 w-[240px] h-[556px] m-8 '>
        <button
         onClick={() => handleCategoryChange('all')} className={`btn ${category === 'all' ? 
         'bg-[#9538E2] text-white rounded-full w-[192px] h-[52px]' : 'bg-gray-200'}`}>
          All Product
         </button>
         <button
       onClick={() => handleCategoryChange('Computers')}
       className={`btn ${category === 'Computers' ? 'bg-[#9538E2] text-white rounded-full w-[192px] h-[52px]' : 'bg-gray-200 text-gray-700 rounded-full w-[192px] h-[52px]'}`}>
       Laptop
     </button>
     <button
       onClick={() => handleCategoryChange('Phones')}
       className={`btn ${category === 'Phones' ? 'bg-[#9538E2] text-white rounded-full w-[192px] h-[52px]' : 'bg-gray-200 text-gray-700 rounded-full w-[192px] h-[52px]'}`}>
       Phones
     </button>
     <button
       onClick={() => handleCategoryChange('Headphones')}
       className={`btn ${category === 'Headphones' ? 'bg-[#9538E2] text-white rounded-full w-[192px] h-[52px]' : 'bg-gray-200 text-gray-700 rounded-full w-[192px] h-[52px]'}`}>
      Headphones
     </button>
     <button
       onClick={() => handleCategoryChange('Smart Watches')}
       className={`btn ${category === 'Smart Watches' ? 'bg-[#9538E2] text-white rounded-full w-[192px] h-[52px]' : 'bg-gray-200 text-gray-700 rounded-full w-[192px] h-[52px]'}`}>
       Smart Watches
     </button>
     <button
       onClick={() => handleCategoryChange('Power Banks')}
       className={`btn ${category === 'Power Banks' ? 'bg-[#9538E2] text-white rounded-full w-[192px] h-[52px]' : 'bg-gray-200 text-gray-700 rounded-full w-[192px] h-[52px]'}`}>
       Power Banks
     </button>
     <button
       onClick={() => handleCategoryChange('iPhone')}
       className={`btn ${category === 'iPhone' ? 'bg-[#9538E2] text-white rounded-full w-[192px] h-[52px]' : 'bg-gray-200 text-gray-700 rounded-full w-[192px] h-[52px]'}`}>
       Iphone
     </button>
        </div>
 
       <div className='flex-grow flex justify-center items-center '>
        {/* gadgets grid */}
         <div className='grid grid-cols-1 md:grid-cols-2 
         lg:grid-cols-3 gap-10 mx-auto'>
         {filteredGadgets.map(gadget => (
           <Gadget gadget={gadget} key={gadget.product_id} />
         ))}
        </div> 
      
       </div>
       
       </div>
      
       </div>
      
        
    );
};

export default Gadgets;