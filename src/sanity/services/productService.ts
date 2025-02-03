import { client } from '../lib/client';
import { Product } from '@/types/product';

export async function getAllProducts(): Promise<Product[]> {
  const query = '*[_type == "product"]';
  const products = await client.fetch<Product[]>(query);
  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  const query = `*[_type == "product" && _id == $id][0]`;
  const product = await client.fetch<Product | null>(query, { id });
  return product;
}