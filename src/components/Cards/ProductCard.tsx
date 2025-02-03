'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    const router = useRouter();

    const handleViewDetails = () => {
        router.push(`/products/${product.id}`);
    };

    return (
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="cursor-pointer" onClick={handleViewDetails}>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={300} 
                    height={300} 
                    className="object-cover rounded-md w-full h-[200px]"
                />
                <div className="mt-4">
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="text-sm text-gray-600 mt-1">Price: ${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="mt-4">
                <Button 
                    onClick={handleViewDetails}
                    variant="outline"
                    className="w-full"
                >
                    View Details
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;