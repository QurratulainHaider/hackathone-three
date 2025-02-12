// src/lib/fetchProducts.ts
import { Product } from '@/types/product'; // Product type import karein

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data as Product[]; // 🔹 Data ko Product[] type mein cast karein
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};