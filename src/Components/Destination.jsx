import React from 'react';
import Mountain1 from '../asserts/mountain1.jpg';
import Mountain2 from '../asserts/mountain2.jpg';
import Mountain3 from '../asserts/mountain3.jpg';
import "./DestinationStyles.css";

const Destination = () => {
    return ( 
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot within a time frame</p>

            <div className='first-des'>
                <div className='des-text'>
                    <h2>Taal volcano, Batangas</h2>
                    <p>
                    Volcanoes are Earth's geologic architects. They've created more than 80 percent of our planet's surface, laying the foundation that has allowed life to thrive. Their explosive force crafts mountains as well as craters. Lava rivers spread into bleak landscapes. But as time ticks by, the elements break down these volcanic rocks, liberating nutrients from their stony prisons and creating remarkably fertile soils that have allowed civilizations to flourish.
                    </p>
                </div>

                <div className='image'>
                    <img alt="img" src={Mountain1}/>
                    <img alt="img" src={Mountain2}/>
                </div>
            </div>
        </div>
     );
}
 
export default Destination;