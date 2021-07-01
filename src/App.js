import { useState, useEffect } from 'react';

import './App.css';

import BikesSection from './containers/bikesSection/BikesSection';

const backendURL = 'http://localhost:3000';
const bikesURL = `${backendURL}/bikes`;

function App() {

  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch(bikesURL)
      .then(response => response.json())
      .then(setBikes);
  }, []);

  return (
    <div className="App">
      <BikesSection bikes={bikes}/>
    </div>
  );
}

export default App;
