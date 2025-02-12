// src/sanity/services/importProducts.ts
import { client } from '../lib/client'; // Sanity client import karein
import { fetchProducts } from '@/sanity/lib/fetchProducts'; // Fetch function import karein
import { Product } from '../../types/product'; // Product type import karein

export const importProducts = async () => {
    try {
      // API se data fetch karein
      const products = await fetchProducts();
  
      if (!products || products.length === 0) {
        console.error('No products found to import.');
        return;
      }
  
      // Sanity mein data add karein
      const transaction = client.transaction();
      products.forEach((product: Product) => {
        transaction.createOrReplace({
          _id: product._id || `product.${Math.random().toString(36).substring(2, 9)}`, // Unique ID
          _type: 'product', // Sanity schema ka type
          title: product.title,
          description: product.description,
          productImage: product.productImage,
          price: product.price,
          tags: product.tags,
          discountPercentage: product.discountPercentage,
          isNew: product.isNew,
        });
      });
  
      // Transaction commit karein
      await transaction.commit();
      console.log('Products imported successfully!');
    } catch (error) {
      console.error('Error importing products:', error);
    }
  };