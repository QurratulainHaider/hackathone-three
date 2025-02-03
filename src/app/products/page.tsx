"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const sanity = sanityClient({
  projectId: "knpfc91a",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  productImage: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"]{
          _id,
          title,
          price,
          description,
          discountPercentage,
          productImage,
          tags
        }`;
      const products = await sanity.fetch(query);
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="gap-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        {/* Products from API Data */}
      </h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-150"
        >
          <Image
            src={urlForImage(product.productImage).url() || ""}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-slate-800 mt-2 text-sm">
              {product.description.slice(0, 100)}...
            </p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-slate-600 font-bold">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <p>{product.discountPercentage}% OFF</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
