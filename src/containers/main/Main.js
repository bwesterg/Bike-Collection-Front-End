import { useState } from 'react';

import './Main.css'

import BikesSection from '../bikesSection/BikesSection';
import CreateBike from '../../components/createBike/CreateBike';

function Main({ bikes, setBikes }) {

    const [isFormShowing, setIsFormShowing] = useState(true);

    return (
        <main>
            <button 
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
            <BikesSection bikes={bikes}/>
        </main>
    );
}

export default Main;