import React, { useState } from 'react';

function App() {
  let [couter, setCouter] = useState(0)

  function couterIncrement() {
    setCouter(couter + 1)
  }

  return (
    <div className="App">
      <h1>Counter {couter}</h1>
      <button onClick={couterIncrement}>Adiciona</button>
    </div>
  );
}

export default App;
