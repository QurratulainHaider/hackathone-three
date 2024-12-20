import Image from 'next/image'
import { products } from '@/constant/shopCards1'

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="w-[238px] h-[488px] bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-[239px] h-[300px] relative">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xl font-semibold text-center">{product.title}</h2>
              <p className="text-gray-600 text-center">{product.category}</p>
              <p className="text-blue-600 font-bold text-center mt-2">${product.price.toFixed(2)}</p>
              <div className="flex justify-center mt-2">
                {product.colors.map((color, colorIndex) => (
                  <div key={colorIndex} className="w-4 h-4 rounded-full mx-1" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Section */}
      <div className="mt-8 flex justify-center">
        <nav
          className="flex items-center justify-between w-[313px] h-[74px] bg-gray-200 rounded-md"
          aria-label="Pagination"
        >
          <button className="flex-1 text-gray-500 text-lg hover:bg-gray-300 py-4 px-4 rounded-l-md">
            First
          </button>
          <button className="flex-1 text-gray-500 text-lg hover:bg-gray-300 py-4 px-4">
            1
          </button>
          <button className="flex-1 text-white text-lg bg-blue-500 hover:bg-blue-600 py-4 px-4">
            2
          </button>
          <button className="flex-1 text-gray-500 text-lg hover:bg-gray-300 py-4 px-4">
            3
          </button>
          <button className="flex-1 text-gray-500 text-lg hover:bg-gray-300 py-4 px-4 rounded-r-md">
            Next
          </button>
        </nav>
      </div>
    </div>
  )
}

