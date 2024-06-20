const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Configura la cartella src/assets/images per servire file statici
app.use('/images', express.static(path.join(__dirname, 'src/assets/images')));

const dishes = [
  { id: 1, category: 'Antipasti', name: 'Cevice', description: 'Pesc', price: 5, quantity: 20, image: '/images/Cevic.png' },
  { id: 2, category: 'Primi', name: 'Fregola', description: 'ciao', price: 12, quantity: 15, image: '/images/Fregola.png' },
  { id: 3, category: 'Secondi', name: 'polpo', description: 'pesce', price: 25, quantity: 10, image: '/images/polpo-removebg-preview.jpg' },
  { id: 4, category: 'Dessert', name: 'Cremoso Cioccolato', description: 'dolce', price: 25, quantity: 10, image: '/images/cremoso-cioccolato.jpg' }
];

app.get('/api/dishes', (req, res) => {
  res.json(dishes);
});

app.get('/api/dishes/:id', (req, res) => {
  const dish = dishes.find(d => d.id === parseInt(req.params.id));
  if (!dish) return res.status(404).send('Dish not found');
  res.json(dish);
});

app.post('/api/dishes/:id/reduce', (req, res) => {
  const dish = dishes.find(d => d.id === parseInt(req.params.id));
  if (!dish) return res.status(404).send('Dish not found');
  if (dish.quantity > 0) dish.quantity -= 1;
  res.json(dish);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
