import './TripStyles.css';
import TripData from './TripData';
import Mountain1 from '../asserts/mountain1.jpg';
import Mountain2 from '../asserts/mountain2.jpg';
import Mountain3 from '../asserts/mountain3.jpg';

const Trip = () => {
    return (<>
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
        </div>
        <div className='tripcard'>
            <TripData
            img ={Mountain1}
            />
        </div>
        </> 
     );
}
 
export default Trip;