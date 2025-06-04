import { Router } from 'express';
import { listProducts, getProductsById, createProduct } from './productsController';

//Products endpoints
const router = Router();

router.get('/', listProducts);

router.get('/:id', getProductsById);

router.post('/', createProduct);

export default router;
