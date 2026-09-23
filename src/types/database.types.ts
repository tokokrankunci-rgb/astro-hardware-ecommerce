export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          sku: string;
          name: string;
          slug: string;
          category_id: string | null;
          brand_id: string | null;
          description: string | null;
          specs: Json | null;
          price_retail: number;
          weight_gram: number;
          stock: number;
          warranty: string | null;
          image_urls: string[] | null;
          is_active: boolean;
          created_at: string;
        };
      };
      b2b_tiered_prices: {
        Row: {
          id: string;
          product_id: string;
          min_quantity: number;
          max_quantity: number | null;
          unit_price: number;
        };
      };
    };
  };
}