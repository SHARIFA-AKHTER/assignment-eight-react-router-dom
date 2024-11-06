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

       
        // const gadgetProductList = allGadgets.filter(
        //     gadget => storedGadgetListInt.includes(gadget.product_id)
        // );

        const  gadgetProductList = allGadgets.filter(
            gadget =>  storedGadgetListInt.includes(gadget.product_id));

        console.log(storedGadgetList, allGadgets, storedGadgetListInt)

        setGadgetList(gadgetList);

    },[])
    return (
        <div>
            
            <h3 className="text-3xl my-8">Listed Gadgets</h3>

            <Tabs>
    <TabList>
      <Tab>Gadget List</Tab>
      <Tab>Product List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Gadget I Feel: {gadgetList.length}</h2>
      {
        gadgetList.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}>

        </Gadget>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My Product list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedGadgets;