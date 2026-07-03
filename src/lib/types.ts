export type product_type = {
product_id: string,
title: string,
brand: string,
price: string,
currency?: string,
color?: string,
size_available?: string,
product_url?: string,
image_url: string,
product_code?: string,
product_type?: string,
has_variant_colours?: boolean,
};

export type CarouselProps = {
  album: product_type[];
  className?: string;
};

type CartItem = {
  product_id: string;
  title: string;
  brand: string;
  price: string;
  image_url: string;
  quantity: number;
};

export interface CartState {
  items: CartItem[];
  addItem: (product: Omit<CartItem, "quantity">) => void;
  removeItem: (product_id: string) => void;
  updateQuantity: (product_id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}