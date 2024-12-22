'use client';

import Image from 'next/image';

interface Category {
  title: string;
  image: string;
  className: string;
  width: number;
  height: number;
}

const EditorsPick: React.FC = () => {
  const categories: Category[] = [
    {
      title: 'MEN',
      image: '/images/media cover.png',
      className: 'col-span-2 row-span-2',
      width: 1439,
      height: 716,
    },
    {
      title: 'WOMEN',
      image: '/images/girlcover.png',
      className: 'col-span-1 row-span-2',
      width: 416,
      height: 753,
    },
    {
      title: 'ACCESSORIES',
      image: '/images/media bg.png',
      className: 'col-span-1 row-span-1',
      width: 416,
      height: 753,
    },
    {
      title: 'KIDS',
      image: '/images/filter.png',
      className: 'col-span-1 row-span-1',
      width: 416,
      height: 753,
    },
    {
      title: 'MAIN',
      image: '/images/changed-main.png',
      className: 'col-span-2 row-span-2',
      width: 1439,
      height: 716,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-2.5 text-2xl font-bold leading-8 tracking-tight text-[#252B42]">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-sm leading-5 tracking-wide text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-4 gap-7">
        {categories.map((category) => (
          <div
            key={category.title}
            className={`relative overflow-hidden ${category.className}`}
          >
            <div className="group relative h-full w-full">
              <Image
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover"
                width={category.width}
                height={category.height}
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
  );
};

export default EditorsPick;
