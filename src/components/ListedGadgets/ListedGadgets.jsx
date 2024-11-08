import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredGadgetList } from '../../Utility/addToDb';
import Gadget from '../Gadget/Gadget';

const ListedGadgets = () => {
    const [gadgetList, setGadgetList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const allGadgets = useLoaderData();

    // Load cart gadgets from local storage
    useEffect(() => {
        const storedGadgetList = getStoredGadgetList();
        const storedGadgetListInt = storedGadgetList.map(id => parseInt(id));
        const productGadgetList = allGadgets.filter(gadget => storedGadgetListInt.includes(gadget.product_id));

        // Calculate total price
        const total = productGadgetList.reduce((sum, gadget) => sum + gadget.price, 0);

        setGadgetList(productGadgetList);
        setTotalPrice(total);
    }, [allGadgets]);

    // Handle Purchase Button Click
    const handlePurchase = () => {
        setShowModal(true);
        // Empty the cart
        setGadgetList([]);
        setTotalPrice(0);
    };

    // Close Modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h3 className="text-3xl my-8 ml-44 mt-10">Cart</h3>
            <Tabs>
                <div className='flex justify-end mr-12'>
                    <TabList>
                        <h3 className='flex justify-between '>Total Cost: ${totalPrice}</h3>
                        <Tab><button className='btn text-[#9538E2] outline'>Sort by Price</button></Tab>
                        <Tab>
                            <button
                                className='btn bg-[#8332C5] text-white'
                                disabled={gadgetList.length === 0}
                                onClick={handlePurchase}
                            >
                                Purchase
                            </button>
                        </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2 className='text-2xl'>Total Items: {gadgetList.length}</h2>
                    {gadgetList.map(gadget => (
                        <Gadget key={gadget.product_id} gadget={gadget} />
                    ))}
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>Thank you for your purchase!</h2>
                </TabPanel>
            </Tabs>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl mb-4">🎉 Congratulations! 🎉</h2>
                        <p>Your purchase was successful.</p>
                        <button
                            className="btn bg-[#8332C5] text-white mt-4"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListedGadgets;