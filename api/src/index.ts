import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req,res) => {
  res.send('Home')
});

app.get('/products', (req,res) => {
  res.send('List of products');
});

app.get('/products/:id', (req,res) => {
  console.log(req);
  res.send(' the product');
});

app.post('/products', (req,res) => {
  res.send('New product created');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});
