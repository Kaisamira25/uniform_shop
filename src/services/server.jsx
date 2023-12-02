const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
app.use(bodyParser.json());

app.post('/api/order', (req, res) => {
  const orderData = req.body;
  console.log('Received order data:', orderData);
  res.json({ success: true, message: 'Order placed successfully' });
});

app.get('/api/cart', (req, res) => {
  const cartItems = [
    { id: 1, name: 'Áo thun', price: 20, quantity: 2 },
  ];
  res.json(cartItems);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
