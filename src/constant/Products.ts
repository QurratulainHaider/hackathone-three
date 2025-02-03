// src\constant\Products.ts
export interface Product {
    id: number;
    title: string;
    department?: string;
    originalPrice?: number;
    salePrice?: number;
    image: string;
    colors?: string[];
    profession?: string;
    description?: string;
    date?: string;
    comments?: string;
    badge?: string;
    itemCount?: number;
    category: string; // Bestseller, Featured, etc.
  }
  
  export const products: Product[] = [
    // Bestseller Products
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/images/card1.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      category: "bestseller",
    },
    {
      id: 2,
      title: "Web Development",
      department: "IT Department",
      originalPrice: 20.99,
      salePrice: 9.99,
      image: "/images/card2.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      category: "bestseller",
    },
    // Featured Products
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integrale)",
      description: "We focus on ergonomics and meeting you where you work.",
      date: "23 April 2023",
      comments: "36 comments",
      image: "/images/road.png",
      badge: "NEW",
      category: "featured",
    },
    {
      id: 4,
      title: "Photography",
      department: "Arts Department",
      originalPrice: 30.0,
      salePrice: 18.0,
      image: "/images/card6.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      category: "featured",
    },
    // Shop Cards
    {
      id: 5,
      title: "CLOTHS",
      image: "/images/cardg.png",
      itemCount: 5,
      category: "shopcard",
    },
    {
      id: 6,
      title: "CLOTHS",
      image: "/images/card-item.png",
      itemCount: 5,
      category: "shopcard",
    },
    // General Products
    {
      id: 7,
      title: "Username 1",
      profession: "Profession 1",
      image: "/images/product/g1.png",
      category: "general",
    },
    {
      id: 8,
      title: "Username 2",
      profession: "Profession 2",
      image: "/images/product/g2.png",
      category: "general",
    },
  ];
  