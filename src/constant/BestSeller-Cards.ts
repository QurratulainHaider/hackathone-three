// src/constant/BestSeller-Cards.ts
export interface Product {
  id: number;
  title: string;
  department: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/card1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    title: "Web Development",
    department: "IT Department",
    originalPrice: 20.99,
    salePrice: 9.99,
    image: "/images/card2.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    title: "Digital Marketing",
    department: "Marketing Department",
    originalPrice: 14.25,
    salePrice: 7.25,
    image: "/images/card3.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    title: "Creative Writing",
    department: "English Department",
    originalPrice: 18.50,
    salePrice: 10.00,
    image: "/images/card4.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 5,
    title: "UI/UX Design",
    department: "Design Department",
    originalPrice: 25.00,
    salePrice: 15.00,
    image: "/images/card5.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 6,
    title: "Photography",
    department: "Arts Department",
    originalPrice: 30.00,
    salePrice: 18.00,
    image: "/images/card6.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 7,
    title: "Mobile App Development",
    department: "IT Department",
    originalPrice: 22.50,
    salePrice: 12.50,
    image: "/images/card7.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 8,
    title: "Content Creation",
    department: "Media Department",
    originalPrice: 19.99,
    salePrice: 9.99,
    image: "/images/card8.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];
