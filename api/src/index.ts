import express, {json, urlencoded} from 'express';
import productsRoutes from './routes/products/index'

const port = 3000;
const app = express();

app.use(json());
app.use(urlencoded({extended: false}));

app.get('/', (req,res) => {
  res.send('Home')
});

app.use('/products', productsRoutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});
