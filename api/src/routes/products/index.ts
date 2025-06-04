import { Router } from 'express';
import { listProducts, getProductById, createProduct, updateProduct, deleteProduct } from './productsController';

//Products endpoints
const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/',deleteProduct);

export default router;
