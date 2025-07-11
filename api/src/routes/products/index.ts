import { Router } from 'express';
import { listProducts, getProductById, createProduct, updateProduct, deleteProduct } from './productsController';
import {validateData} from '../../middlewares/validationMiddlewares';

//Products endpoints
const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', validateData(createProductSchema), createProduct);
router.put('/:id', updateProduct);
router.delete('/:id',deleteProduct);

export default router;
