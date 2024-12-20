import Image from 'next/image'

const cards = [
  {
    id: 1,
    image: "/images/cardg.png",
    title: "",
    items: ""
  },
  {
    id: 2,
    image: "/images/card-item.png",
    title: "",
    items: ""
  },
  {
    id: 3,
    image: "/images/white g.png",
    title: "",
    items: ""
  },
  {
    id: 4,
    image: "/images/card-item4.png",
    title: "",
    items: ""
  },
  {
    id: 5,
    image: "/images/card-item3.png",
    title: "",
    items: ""
  }
]

export default function ShopCards() {
  return (
    <div className="w-full bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="relative h-[223px] bg-white overflow-hidden group cursor-pointer"
            >
              <Image
                src={card.image}
                alt="Clothing category"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)] transition-opacity group-hover:bg-[rgba(33,33,33,0.35)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="font-montserrat font-bold text-base text-white tracking-[0.1px] mb-2">
                  {card.title}
                </h2>
                <p className="font-montserrat font-normal text-sm text-white tracking-[0.2px]">
                  {card.items}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

