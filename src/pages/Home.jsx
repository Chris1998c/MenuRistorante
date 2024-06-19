import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuCategory from '../components/MenuCategory';

const Home = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dishes')
      .then(response => setDishes(response.data))
      .catch(error => console.error('Error fetching the dishes:', error));
  }, []);

  const categorizeDishes = (category) => {
    return dishes.filter(dish => dish.category === category);
  };

  return (
    <div className="home">
      <MenuCategory title="Antipasti" dishes={categorizeDishes('Antipasti')} />
      <MenuCategory title="Primi" dishes={categorizeDishes('Primi')} />
      <MenuCategory title="Secondi" dishes={categorizeDishes('Secondi')} />
      <MenuCategory title="Dessert" dishes={categorizeDishes("Dessert")}/>
    </div>
  );
};

export default Home;
