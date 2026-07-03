"use client";

import { useCartStore } from "@/store/cartStore";
import { product_type } from "@/lib/types";
import { useState } from "react";

interface AddToCartButtonProps {
  product: product_type;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      product_id: product.product_id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      image_url: product.image_url,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`rounded-2xl px-6 py-4 text-base font-black text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 focus:outline-none active:ring-4 ${
        added
          ? "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
          : "bg-slate-950 hover:bg-sky-700 active:ring-sky-200 dark:bg-slate-100 dark:hover:bg-sky-200 dark:active:ring-sky-200"
      }`}>
      {added ? "✓ Added to Cart" : "Add to Cart"}
    </button>
  );
}
