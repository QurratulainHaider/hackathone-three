'use client'
import { useEffect, useState } from 'react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { Product as FallbackProduct, products as fallbackProducts } from "../../constant/BestSeller-Cards"

// Interface for API products
interface APIProduct {
    _id?: string;
    id?: string;
    name: string;
    price: number;
    image: string;
}

// Combined Product type that can handle both API and fallback data
type CombinedProduct = {
    id?: string | number;
    _id?: string;
    name?: string;
    title?: string;
    price?: number;
    salePrice?: number;
    originalPrice?: number;
    image: string;
    department?: string;
    colors?: string[];
}

export default function BestSeller() {
    const [products, setProducts] = useState<CombinedProduct[]>([]);
    const [, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('https://template6-six.vercel.app/api/products');
                const data = await response.json();
                console.log('API Response:', data);
                
                if (data && data.length > 0) {
                    // Map API data to combined format
                    const formattedData = data.map((item: APIProduct) => ({
                        id: item._id || item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image
                    }));
                    setProducts(formattedData);
                } else {
                    // Map fallback data to combined format
                    const formattedFallback = fallbackProducts.map((item: FallbackProduct) => ({
                        id: item.id,
                        name: item.title,
                        price: item.salePrice,
                        originalPrice: item.originalPrice,
                        image: item.image,
                        department: item.department,
                        colors: item.colors
                    }));
                    setProducts(formattedFallback);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                // Map fallback data on error
                const formattedFallback = fallbackProducts.map((item: FallbackProduct) => ({
                    id: item.id,
                    name: item.title,
                    price: item.salePrice,
                    originalPrice: item.originalPrice,
                    image: item.image,
                    department: item.department,
                    colors: item.colors
                }));
                setProducts(formattedFallback);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    // Rest of your component remains the same
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h4 className="text-gray-500 text-lg mb-2">Featured Products</h4>
                    <h2 className="text-[#252B42] text-3xl font-bold mb-2">BESTSELLER PRODUCTS</h2>
                    <p className="text-gray-500 text-sm">Browse our top-rated products for every department.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                            style={{ height: '615px', width: '240px' }}
                            onClick={() => router.push(`/products/${product.id}`)}
                        >
                            <div className="relative w-full h-[300px]">
                                <Image
                                    src={product.image}
                                    alt={product.name || product.title || 'Product Image'}
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="p-5 flex flex-col items-center">
                                <h5 className="font-bold text-lg text-[#252B42] text-center">
                                    {product.name || product.title}
                                </h5>
                                {product.department && (
                                    <p className="text-sm text-gray-500 mb-2">{product.department}</p>
                                )}

                                <div className="flex items-center gap-2 mb-2">
                                    {product.originalPrice && (
                                        <span className="text-gray-400 line-through text-sm">
                                            ${product.originalPrice.toFixed(2)}
                                        </span>
                                    )}
                                    <span className="text-[#23856D] font-bold text-lg">
                                    ${(product.price || product.salePrice || 0).toFixed(2)}
                                    </span>
                                </div>

                                {product.colors && (
                                    <div className="flex gap-2">
                                        {product.colors.map((color, index) => (
                                            <div
                                                key={index}
                                                className="w-5 h-5 rounded-full"
                                                style={{ backgroundColor: color }}
                                                title={color}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}