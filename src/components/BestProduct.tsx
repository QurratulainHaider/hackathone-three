import { products } from "@/constant/product-card";
import Image from "next/image";

export const BestProduct = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:py-20">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 text-center">
        <h3 className="text-lg sm:text-xl font-normal leading-6 sm:leading-[30px] tracking-wide text-[#737373]">
          Featured Products
        </h3>
        <h2 className="mb-4 text-xl sm:mb-2.5 sm:text-2xl font-bold leading-6 sm:leading-8 tracking-tight text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-sm leading-5 tracking-wide text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full">
              <Image
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-auto"
                layout="responsive" // Responsive layout for images
                width={240} // Fixed width
                height={360} // Fixed height (adjust for aspect ratio)
              />
            </div>
            {/* Product Info */}
            <div className="flex flex-col items-center px-4 sm:px-6 py-4 sm:py-6">
              <h5 className="mb-2 text-base font-bold leading-5 sm:mb-2.5 sm:leading-6 tracking-tight text-[#252B42]">
                {product.title}
              </h5>
              <p className="mb-2 text-sm font-bold leading-5 sm:mb-2.5 sm:leading-6 tracking-wide text-[#737373]">
                {product.department}
              </p>
              {/* Product Prices */}
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold leading-5 sm:leading-6 tracking-tight text-[#BDBDBD] line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-sm sm:text-base font-bold leading-5 sm:leading-6 tracking-tight text-[#23856D]">
                  ${product.salePrice.toFixed(2)}
                </span>
              </div>
              {/* Product Colors */}
              <div className="mt-2 flex gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
