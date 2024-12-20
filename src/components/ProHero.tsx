import Image from "next/image"

export default function ProHero() {
  const categories = [
    {
      title: "",  
      image: "/images/red.png",
      className: "col-span-2 row-span-2",
    },
    {
      title: "",  
      image: "/images/white.png",
      className: "col-span-1 row-span-1",
    },
    {
      title: "",  
      image: "/images/blue2.png",
      className: "col-span-1 row-span-1",
    },
    {
      title: "", 
      image: "/images/blue3.png",    
      className: "col-span-1 row-span-1",
    },
    {
      title: "",  
      image: "/images/darkblue.png",    
      className: "col-span-1 row-span-1",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid grid-cols-4 gap-7">
        {categories.map((category, index) => (
          <div
            key={category.image}  
            className={`relative overflow-hidden ${category.className}`}
          >
            <div className="group relative h-full w-full">
              <Image
                src={category.image}
                alt="Image"  
                className="h-full w-full object-cover"
                width={index === 0 ? 510 : 240}
                height={index === 0 || index === 1 ? 500 : 242}
              />
              <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/40" />
              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
