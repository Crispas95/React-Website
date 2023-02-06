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
            heading = "Trip in Malawi"
            text="Mulanje has Malawi’s highest peak and the scale of this truly magnificent mountain has to be seen to be appreciated. Its bare rock flanks tower to 10,000ft (3,000m), dwarfing all that surrounds it. Mulanje is actually a ‘massif’ of syenite and granite covering a massive 650 sq km . Erosion by rivers running along lines of weakness on the rock has resulted in deep clefts striking back into the heart of the mountain. Where they meet, cauldron-like hollows have developed. The resulting landscape is a wondrously beautiful one of basins/plateaux, rivers, gorges, waterfalls and no less than 20 peaks above 2,500m"
            />
            <TripData
            img ={Mountain2}
            heading = "Trip in Malawi"
            text="Mulanje has Malawi’s highest peak and the scale of this truly magnificent mountain has to be seen to be appreciated. Its bare rock flanks tower to 10,000ft (3,000m), dwarfing all that surrounds it. Mulanje is actually a ‘massif’ of syenite and granite covering a massive 650 sq km . Erosion by rivers running along lines of weakness on the rock has resulted in deep clefts striking back into the heart of the mountain. Where they meet, cauldron-like hollows have developed. The resulting landscape is a wondrously beautiful one of basins/plateaux, rivers, gorges, waterfalls and no less than 20 peaks above 2,500m"
            />
            <TripData
            img ={Mountain3}
            heading = "Trip in Malawi"
            text="Mulanje has Malawi’s highest peak and the scale of this truly magnificent mountain has to be seen to be appreciated. Its bare rock flanks tower to 10,000ft (3,000m), dwarfing all that surrounds it. Mulanje is actually a ‘massif’ of syenite and granite covering a massive 650 sq km . Erosion by rivers running along lines of weakness on the rock has resulted in deep clefts striking back into the heart of the mountain. Where they meet, cauldron-like hollows have developed. The resulting landscape is a wondrously beautiful one of basins/plateaux, rivers, gorges, waterfalls and no less than 20 peaks above 2,500m"
            />
        </div>
        </> 
     );
}
 
export default Trip;