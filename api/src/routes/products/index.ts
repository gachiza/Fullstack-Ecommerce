import { Router } from 'express';


//Products endpoints
const router = Router();

router.get('/', (req,res) => {
  res.send('List of products');
});

router.get('/:id', (req,res) => {
  console.log(req);
  res.send(' the product');
});

router.post('/', (req,res) => {
  res.send('New product created');
});

export default router;
