import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredGadgetList } from '../../Utility/addToDb';
import Gadget from '../Gadget/Gadget';

const ListedGadgets = () => {
    const [gadgetList, setGadgetList]= useState([]);
    const allGadgets = useLoaderData();

    useEffect(() =>{
        const storedGadgetList = getStoredGadgetList();
        const storedGadgetListInt = storedGadgetList.map(id => parseInt(id))

       
    // const productGadgetList=allGadgets.filter(gadget =>storedGadgetListInt.includes(gadget.product_id));    

        console.log(storedGadgetList, allGadgets, storedGadgetListInt)

        setGadgetList(gadgetList);

    },[])
    return (
        
        <div>
              <h3 className="text-3xl my-8 ml-44 mt-10">Cart</h3>  
            <Tabs>
 <div className='flex justify-end mr-12'>

 <TabList>
    <h3 className='flex justify-between '>Total Cost:</h3>

      <Tab><button className='btn text-[#9538E2] outline'>Sort by Price</button></Tab>
      <Tab><button className='btn  bg-[#8332C5] text-white'>Purchase</button></Tab>
    </TabList>
 </div>

    <TabPanel>
     
      <h2 className='text-2xl'> {gadgetList.length}</h2>
      {
        gadgetList.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}>

        </Gadget>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'></h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedGadgets;