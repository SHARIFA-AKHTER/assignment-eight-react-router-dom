
import { toast } from "react-toastify";

const getStoredGadgetList = () => {
    // Retrieve the gadget list from localStorage
    const gadgetListStr = localStorage.getItem('gadget-List');
    if (gadgetListStr) {
        return JSON.parse(gadgetListStr);
    } else {
        return [];
    }
};

export const removeFromDb = (productId) => {
    const storedGadgetList = getStoredGadgetList();
    const updatedList = storedGadgetList.filter(id => id !== productId);
    localStorage.setItem('gadgetList', JSON.stringify(updatedList)); // or use whatever key you're storing gadgets with
};

const addToStoredGadgetList = (id) => {
    const gadgetList = getStoredGadgetList();
    if (gadgetList.includes(id)) {
        // Already exists, do not add it
        console.log(id, ' already exists in the gadget list');
        toast('This gadget is already in your list.');
    } else {
        gadgetList.push(id); 
        const gadgetListStr = JSON.stringify(gadgetList);
        localStorage.setItem('gadget-List', gadgetListStr); 
        toast('Gadget added to your list!');
    }
};

export { addToStoredGadgetList,getStoredGadgetList }