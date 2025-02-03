import { Image as SanityImage } from 'sanity'

export interface Product {
  _id: string;
  title: string;
  description: string;
  productImage: SanityImage;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}