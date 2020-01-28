import React from 'react';
import './App.css';
import content from './assets/products.json'

import Menu from './pages/menu';
import Produtos from './pages/produtos';

function App() {
  let id = 0;
  return (
    <>
      <Menu />
      {content.map(prod => (
        <Produtos key={id++} product={prod}/>
      ))}
    </>
  );
}

export default App;
