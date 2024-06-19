import React from 'react';
import { Link } from 'react-router-dom';

const DishCard = ({ dish }) => {
  return (
    <Link to={`/dish/${dish.id}`} className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <p className="price">{dish.price}€</p>
    </Link>
  );
};

export default DishCard;
