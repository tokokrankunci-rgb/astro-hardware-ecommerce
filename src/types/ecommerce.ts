export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  price_retail: number;
  price_b2b: number;
  min_order_b2b: number;
  weight_gram: number;
  stock: number;
  image_url: string;
  description: string;
  specs?: Record<string, string>;
  warranty?: string;
}