export type UserRole = 'b2c' | 'b2b_pending' | 'b2b_approved';

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: string;
  brand: 'Dekson' | 'Reallock' | 'Arrone';
  price_retail: number;
  price_b2b: number;
  min_order_b2b: number;
  weight_gram: number;
  stock: number;
  image_url: string;
  description: string;
  specs: Record<string, string>;
  warranty: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingCostRequest {
  originCityId: string;
  destinationCityId: string;
  weightGram: number;
  courier: 'jtr' | 'sentral' | 'dakota' | 'jne';
}