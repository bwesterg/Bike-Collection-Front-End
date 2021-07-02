import { useState } from 'react';

import './Main.css'

import BikesSection from '../bikesSection/BikesSection';
import CreateBike from '../../components/createBike/CreateBike';

function Main({ bikes, setBikes }) {

    const [isFormShowing, setIsFormShowing] = useState(true);

    const hideFormClass = isFormShowing ? 'hide-form' : '';

    return (
        <main>
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
            <BikesSection bikes={bikes}/>
        </main>
    );
}

export default Main;