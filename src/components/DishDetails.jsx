import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DishDetails = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/dishes/${id}`)
      .then(response => setDish(response.data))
      .catch(error => console.error('Error fetching the dish:', error));
  }, [id]);

  const handleAddToCart = () => {
    axios.post(`http://localhost:5000/api/dishes/${id}/reduce`)
      .then(response => setDish(response.data))
      .catch(error => console.error('Error updating quantity:', error));
  };

  if (!dish) return <p>Loading...</p>;

  return (
    <div className="dish-details">
      <img src={dish.image} alt={dish.name} />
      <div className="dish-details-content">
        <h1>{dish.name}</h1>
        <p>{dish.description}</p>
        <p className="price">Price: {dish.price}€</p>
        <p className="quantity">Available: {dish.quantity}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default DishDetails;
