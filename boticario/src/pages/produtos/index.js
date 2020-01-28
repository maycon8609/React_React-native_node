import React from 'react';
import './style.css';

export default function Produtos({ product }) {
  const { name, images, Value } = product;

  return (
    <div className="container">
      <img src={images[0].imageUrl} alt="imagem" />
      <h1>{name}</h1>
      <span>R$ {Value}</span>
    </div>
  )
}