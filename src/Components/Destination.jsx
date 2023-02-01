import React from 'react';
import Mountain1 from '../asserts/mountain1.jpg';
import Mountain2 from '../asserts/mountain2.jpg';
import Mountain3 from '../asserts/mountain3.jpg';
import DestinationData from './DestinationData';
import "./DestinationStyles.css";

const Destination = () => {
    return ( 
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot within a time frame</p>

            <DestinationData
            className= 'first-dose'
            heading = "Taal volcano, Batangas" 
            text= "Volcanoes are Earth's geologic architects. They've created more than 80 percent of our planet's surface, laying the foundation that has allowed life to thrive. Their explosive force crafts mountains as well as craters. Lava rivers spread into bleak landscapes. But as time ticks by, the elements break down these volcanic rocks, liberating nutrients from their stony prisons and creating remarkably fertile soils that have allowed civilizations to flourish."
            img1={Mountain1}
            img2={Mountain2}
            />
            <DestinationData
            className='first-dose-reverse'
            heading = "Mt. Mulanje Malawi" 
            text= "Volcanoes are Earth's geologic architects. They've created more than 80 percent of our planet's surface, laying the foundation that has allowed life to thrive. Their explosive force crafts mountains as well as craters. Lava rivers spread into bleak landscapes. But as time ticks by, the elements break down these volcanic rocks, liberating nutrients from their stony prisons and creating remarkably fertile soils that have allowed civilizations to flourish."
            img1={Mountain3}
            img2={Mountain2}
            />
        </div>
     );
}
 
export default Destination;