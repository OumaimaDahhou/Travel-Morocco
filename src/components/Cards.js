import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
     <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
         <div className="cards__container">
          <div className="cards__wrapper">
             <ul className="cards__items">
                 <CardItem 
                 src="images/marrakech.jpg"
                 text="Explore the Red City : Marrakech "
                 label='Historical'
                 path='/places'
                 />
                 <CardItem 
                 src="images/chefchaouen.webp"
                 text="Explore the Blue City : Chefchaouen"
                 label='Adventure'
                 path='/places'
                 />
                   <CardItem 
                 src="images/fes.jpg"
                 text="Explore Fez City "
                 label='Historical'
                 path='/places'
                 />
                 </ul>
                 <ul className="cards__items">
                 <CardItem 
                 src="images/zagora.jpg"
                 text="Explore Zagora City"
                 label='Adventure, Historical'
                 path='/places'
                 />
                   <CardItem 
                 src="images/agadir.jpg"
                 text="Explore Agadir City"
                 label='Adventure'
                 path='/places'
                 />
                 <CardItem 
                 src="images/tanger.jpg"
                 text="Explore Tangier City"
                 label='Adventure'
                 path='/places'
                 />
            </ul>
           </div> 
        </div>
     </div>
    )
}

export default Cards
