import React from 'react';
import Banner from '../Banner/Banner';
 import Gadgets from '../Gatgets/Gadgets';
import ExploreCut from '../ExploreCut/ExploreCut';
import { Outlet } from 'react-router-dom';
import GadgetHeaven from '../GadgetHeaven/GadgetHeaven';


const Home = () => {
   
    return (
        <div>
         
           <Banner>
                
          </Banner>

          <ExploreCut>

          </ExploreCut>
         
             <Gadgets>
           
            </Gadgets>
            
            <GadgetHeaven></GadgetHeaven>

        </div>
    );
};

export default Home;