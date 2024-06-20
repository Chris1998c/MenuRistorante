import React from 'react';
import { Link } from 'react-router-dom';

const DishCard = ({ dish }) => {
  const imageUrl = `http://localhost:5000${dish.image}`; // Costruisci l'URL completo dell'immagine

  return (
    <Link to={`/dish/${dish.id}`} className="dish-card">
      <img src={imageUrl} alt={dish.name} />
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <p className="price">{dish.price}€</p>
    </Link>
  );
};

export default DishCard;
