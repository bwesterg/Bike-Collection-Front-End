import { useEffect, useState } from 'react';

import './Main.css'

import BikesSection from '../bikesSection/BikesSection';
import MainSearch from '../../components/mainSearch/MainSearch'
import CreateBike from '../../components/createBike/CreateBike';

function Main({ bikes, setBikes }) {

    const [isFormShowing, setIsFormShowing] = useState(false);
    const [filteredBikes, setFilteredBikes] = useState([]);

    useEffect(() => setFilteredBikes(bikes), [bikes])

    const filterBikes = (event) => {
        setFilteredBikes(
            bikes.filter(bike => {
                return bike.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
            })
        );
    }

    const hideFormClass = isFormShowing ? 'hide-form' : '';

    return (
        <main>
            <div className="main-top-bar">
                <button 
                    className={`${hideFormClass} toggle-create-bike`}
                    onClick={() => setIsFormShowing(!isFormShowing)}
                >
                        {isFormShowing ? 'HIDE FORM' : 'ADD NEW BIKE'}
                </button>
                {isFormShowing 
                    ? <CreateBike 
                        bikes={bikes} 
                        setBikes={setBikes} 
                    />
                    : null
                }
                <MainSearch filterBikes={filterBikes}/>
                <div className="right-bar-filler"></div>
            </div>
            <BikesSection bikes={filteredBikes}/>
        </main>
    );
}

export default Main;