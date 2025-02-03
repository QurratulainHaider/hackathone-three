'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

// Update interface according to your API response
interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                // Fetch from your API
                const response = await fetch('https://template6-six.vercel.app/api/products');
                const products = await response.json();
                
                // Find the specific product by ID
                const foundProduct = products.find((p: Product) => p.id === params.ProductData);
                setProduct(foundProduct || null);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [params.ProductData]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-[400px]">Loading...</div>;
    }

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Button 
                    onClick={() => router.back()} 
                    className="mt-4"
                >
                    Go Back
                </Button>
            </div>
        );
    }

    const handleAddToCart = () => {
        // TODO: Implement add to cart functionality
        console.log('Adding to cart:', product);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Button 
                variant="ghost" 
                onClick={() => router.back()}
                className="mb-6"
            >
                ← Back
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px] bg-gray-100 rounded-lg">
                    {product.image ? (
                        <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p>No image available</p>
                        </div>
                    )}
                </div>

                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-2xl text-gray-700 mt-4">${product.price}</p>
                    <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
                    <div className="mt-4 prose max-w-none">
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                    <Button 
                        className="mt-6 w-full"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

