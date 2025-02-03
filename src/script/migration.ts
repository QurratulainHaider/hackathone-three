interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  discountPercentage?: number;
  isNew?: boolean;
}

import { client } from './config';

// Function to upload image to Sanity
async function uploadImageToSanity(imageUrl: string) {
  if (!imageUrl) {
    throw new Error('Image URL is undefined');
  }

  try {
    console.log('Attempting to upload image:', imageUrl);
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const blob = await response.blob();

    const asset = await client.assets.upload("image", blob);
    return asset;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
}

// Main migration function
async function migration() {
  try {
    console.log("Starting migration...");
    
    // Step 1: Fetch products data from API
    console.log("Fetching products from API...");
    const response = await fetch("https://template6-six.vercel.app/api/products");
    if (!response.ok) throw new Error(`Failed to fetch products: ${response.statusText}`);
    const products = await response.json() as Product[];
    
    // Debug: Log the first product to see its structure
    console.log("Sample product data:", JSON.stringify(products[0], null, 2));

    // Step 2: Upload images and create Sanity products
    const uploadPromises = products.map(async (product: Product) => {
      try {
        if (!product.image) {
          console.log(`Skipping ${product.title} - No image URL provided`);
          return;
        }

        console.log("Processing product:", {
          title: product.title,
          id: product.id,
          imageUrl: product.image
        });

        const imageAsset = await uploadImageToSanity(product.image);
        console.log("Image uploaded:", imageAsset);

        const sanityProduct = {
          _id: `product-${product.id}`,
          _type: "product",
          title: product.title,
          price: product.price,
          discountPercentage: product.discountPercentage || 0,
          tags: product.category ? [product.category] : [],
          productImage: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          },
          description: product.description,
          isNew: product.isNew || false,
        };

        await client.createOrReplace(sanityProduct);
        console.log(`Product imported: ${product.title}`);
      } catch (error) {
        console.error(`Failed to import product: ${product.title}`, error);
      }
    });

    await Promise.all(uploadPromises);
    console.log("Migration completed successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

// Start migration
migration().catch((error) => {
  console.error("Migration script failed:", error);
  process.exit(1);
});
