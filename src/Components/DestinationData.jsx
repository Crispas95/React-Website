import React from 'react';
import './DestinationStyles.css';
import Mountain1 from '../asserts/mountain1.jpg';
import Mountain2 from '../asserts/mountain2.jpg';
import Mountain3 from '../asserts/mountain3.jpg';

 const DestinationData = ({heading,text,img1,img2,className}) => {
    return (
      <div className='destination'>
            <div className={className}>
                <div className='des-text'>
                    <h2>{heading}</h2>
                    <p>{text}</p>
                </div>

                <div className='image'>
                    <img alt="img" src={img1}/>
                    <img alt="img" src={img2}/>
                </div>
            </div>
        </div>
    );
 }
  
 export default DestinationData;