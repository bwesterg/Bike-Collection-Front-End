import { useState } from 'react';

import './CreateBike.css'

const backendURL = 'http://localhost:3000';
const bikesURL = `${backendURL}/bikes`;

function CreateBike({ bikes, setBikes }) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [origin, setOrigin] = useState('');
    const [material, setMaterial] = useState('');
    const [discipline, setDiscipline] = useState('');

    const makeBike = (event) => {
        event.preventDefault();
        const newBike = { bike: {name, image, origin, material, discipline} };
        // setBikes([...bikes, newBike])

        fetch(bikesURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBike)
        }).then(response => response.json())
          .then(newBike => setBikes([...bikes, newBike]));

        setName('');
        setImage('');
        setOrigin('');
        setMaterial('');
        setDiscipline('');
    }

    return (
        <form className="create-bike" onSubmit={makeBike}>
            <input 
                type="text" 
                name="name"  
                placeholder="bike name"
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input 
                type="text" 
                name="image" 
                placeholder="image URL"
                value={image}
                onChange={event => setImage(event.target.value)}
            />
            <input 
                type="text" 
                name="origin" 
                placeholder="country of manufacture"
                value={origin}
                onChange={event => setOrigin(event.target.value)}
            />
            <input 
                type="text" 
                name="material" 
                placeholder="frame material"
                value={material}
                onChange={event => setMaterial(event.target.value)}
            />
            <input 
                type="text" 
                name="discipline" 
                placeholder="discipline"
                value={discipline}
                onChange={event => setDiscipline(event.target.value)}
            />
            <input 
                type="submit" 
                value="add-bike"
            />
        </form>
    );
}

export default CreateBike;