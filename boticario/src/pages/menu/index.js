import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import './style.css';

export default function Menu() {
  return (
    <nav className="menu">
      <div className="home">
        <a href="#home">MINHA LOJA</a>
      </div>
      <a href="#perfumaria">PERFUMARIA</a>
      <a href="#maquiagem">MAQUIAGEM</a>
      <a href="#cabelos">CABELOS</a>
      <a href="#infatil">INFATIL</a>
      <a href="#cart"><FiShoppingCart className="cart"/></a>
    </nav>
  );
}