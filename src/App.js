import { useState } from 'react';

import './App.css';

function App() {

  const [bikes, setBikes] = useState([
    {
      name: 'Specialized',
      material: 'Carbon',
      origin: 'Taiwan',
      discipline: 'Road',
      image: 'https://s7d5.scene7.com/is/image/Specialized/94920-00_TARMAC-SL7-SW-DI2-FLORED-TARBLK-WHT_HERO'
    },
    {
      name: 'Pinarello',
      material: 'Carbon',
      origin: 'China',
      discipline: 'Road',
      image: 'https://www.datocms-assets.com/19016/1590668702-436.jpg'
    },
    {
      name: 'Cervelo',
      material: 'Carbon',
      origin: 'Taiwan',
      discipline: 'Road',
      image: 'https://cdn.bicyclebluebook.com/bikepedia/2008-cervelo-SoloistCarbon.jpg'
    },
    {
      name: 'Colnago',
      material: 'Carbon',
      origin: 'Italy',
      discipline: 'Road',
      image: 'https://racycles.azureedge.net/assets/standard/11580/large/Colnago_C59_GDYB.jpg'
    },
  ])

  return (
    <div className="App">
      <section className="bikes">
        {
          bikes.map(bike => {
            return (
              <div key={bike.name} className="bike-card">
                <img src={bike.image} alt={bike.name} />
                <h2>Manufacturer: {bike.name}</h2>
                <h3>Manufactured in: {bike.origin}</h3>
                <h3>Frame Material: {bike.material}</h3>
                <h3>Discipline: {bike.discipline}</h3>
              </div>
            )
          })
        }
      </section>
     
    </div>
  );
}

export default App;
