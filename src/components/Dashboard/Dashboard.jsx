import React from 'react';

const Dashboard = () => {
    return (
        <div className='bg-[#9538E2] flex justify-center flex-col
        items-center w-[1538px]  h-[210px] ml-48 '>
            <div className=''>
            <h2 className='text-5xl flex justify-center p-4'>Dashboard</h2>
            <p>Explore the latest gadgets that will take your experience to the next level. From 
            smart devices to the coolest accessories, we have it all!
            </p>
            </div>
            <div className='mt-4'>
            <button className="btn btn-active w-[169px] rounded-full h-[52px] bg-gray-400 mr-4">Cart</button>
            <button className="btn btn-outline w-[169px] h-[52px]">Wishlist</button>
            </div>
        </div>
    );
};

export default Dashboard;