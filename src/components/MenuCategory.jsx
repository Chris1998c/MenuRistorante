import React from 'react';
import DishCard from './DishCard';

const MenuCategory = ({ title, dishes }) => {
  return (
    <section className="menu-category">
      <h2>{title}</h2>
      <div className="dish-list">
        {dishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
