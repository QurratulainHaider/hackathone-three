

interface ProductCardProps {
  image: string;
  title: string;
  department: string;
  originalPrice: number;
  salePrice: number;
}

const products: ProductCardProps[] = [
  {
    image: "/images/knief.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
  },
  {
    image: "/images/glass.png",
    title: "Product Design",
    department: "Designing Department",
    originalPrice: 16.48,
    salePrice: 6.48,
  },
  {
    image: "/images/fork.png",
    title: "Web Development",
    department: "Developer Department",
    originalPrice: 16.48,
    salePrice: 6.48,
  },
  {
    image: "/images/cup.png",
    title: "Marketing",
    department: "Business Department",
    originalPrice: 16.48,
    salePrice: 6.48,
  },
  {
    image: "/images/plate.png",
    title: "SEO Optimization",
    department: "Marketing Department",
    originalPrice: 16.48,
    salePrice: 6.48,
  },
  {
    image: "/images/chair2.png",
    title: "Customer Support",
    department: "Management Department",
    originalPrice: 16.48,
    salePrice: 6.48,
  },
  {
    image: "/images/knief.png",
    title: "Content Writing",
    department: "Content Department",
    originalPrice: 16.48,
    salePrice: 6.48,
  },
  {
    image: "/images/glass.png",
    title: "Data Analysis",
    department: "Analytics Department",
    originalPrice: 16.48,
    salePrice: 6.48,
  },
]

function ProductCard({ image, title, department, originalPrice, salePrice }: ProductCardProps) {
  return (
    <div className="w-full bg-white">
      <div className="relative aspect-[239/280] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 pb-9 space-y-2.5">
        <h3 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-[#252B42]">
          {title}
        </h3>
        <p className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
          {department}
        </p>
        <div className="flex items-center gap-1.5 pt-1.5">
          <span className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-[#BDBDBD]">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-[#23856D]">
            ${salePrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function BestsellerProducts() {
  return (
    <section className="w-full bg-[#FAFAFA] py-12">
      <div className="container max-w-[1124px] mx-auto px-4">
        <div className="flex flex-col items-start w-full">
          <h2 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] mb-6">
            BESTSELLER PRODUCTS
          </h2>
          <div className="w-full h-0.5 bg-[#ECECEC] mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12 w-full">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

