import { Router } from 'express';
import { listProducts, getProductById, createProduct, updateProduct, deleteProduct } from './productsController';
import { productsTable } from '../../db/productSchema';
import {validateData} from '../../middlewares/validationMiddlewares';


import { createInsertSchema, createSelectSchema} from 'drizzle-zod';

import {z} from 'zod';

// const createProductSchema = z.object({
//   name: z.string(),
//   price: z.number({message: 'price should be a number'}),
// });

export const createProductSchema = createInsertSchema(productsTable);


//Products endpoints
const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', validateData(createProductSchema), createProduct);
router.put('/:id', updateProduct);
router.delete('/:id',deleteProduct);

export default router;
