import { Request, Response} from 'express';
import {db} from '../../db/index';
import { productsTable } from '../../db/productSchema';


export function listProducts (req: Request,res: Response) {
  res.send('List of products');
};

export function getProductById (req: Request,res: Response) {
  res.send('getProductsById');
};

export async function createProduct (req: Request,res: Response) {
  try {
    const [product] = await db.insert(productsTable).values(req.body).returning();
  res.status(201).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
  
};

export function updateProduct (req: Request,res: Response) {
  res.send('updateProduct ');
};

export function deleteProduct (req: Request,res: Response) {
  res.send('deleteProduct');
};

