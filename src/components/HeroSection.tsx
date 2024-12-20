import Image from "next/image"

export default function EditorsPick() {
  const categories = [
    {
      title: "MEN",
      image: "/images/media cover.png",
      className: "col-span-2 row-span-2",
    },
    {
      title: "WOMEN",
      image: "/images/girlcover.png",
      className: "col-span-1 row-span-2",
    },
    {
      title: "ACCESSORIES",
      image: "/images/media bg.png",
      className: "col-span-1 row-span-1",
    },
    {
      title: "KIDS",
      image: "/images/filter.png",    
      className: "col-span-1 row-span-1",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-2.5 text-2xl font-bold leading-8 tracking-tight text-[#252B42]">
          EDITOR'S PICK
        </h2>
        <p className="text-sm leading-5 tracking-wide text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-4 gap-7">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={`relative overflow-hidden ${category.className}`}
          >
            <div className="group relative h-full w-full">
              <Image
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover"
                width={index === 0 ? 510 : 240}
                height={index === 0 || index === 1 ? 500 : 242}
              />
              <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/40" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="whitespace-nowrap bg-white px-12 py-3">
                  <h3 className="text-base font-bold leading-6 tracking-tight text-[#252B42]">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

