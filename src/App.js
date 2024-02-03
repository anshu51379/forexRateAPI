import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [forexData, setForexData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.forexrateapi.com/v1/latest?api_key=48f61fcbd14c2600e02026c9c8320d6d&base=INR&currencies=EUR,JPY,USD,AED');
      const data = await response.json();
      setForexData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Forex Rate Viewer</h1>
      {forexData && (
        <div>
          {Object.entries(forexData.rates).map(([pair, rate]) => (
            <p key={pair}>{`${pair}: ${rate}`}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
