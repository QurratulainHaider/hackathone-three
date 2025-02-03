import { Product } from '@/types/product';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border rounded-lg p-4">
            <Image
                src={urlForImage(product.productImage).url() || "/placeholder.svg"}
                alt={product.title}
                width={200}
                height={200}
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProductCard;