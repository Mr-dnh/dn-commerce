"use client";

import { useCartStore } from "@/store/cartStore";
import { product_type } from "@/lib/types";
import { useParams } from "next/navigation";
import en from "@/messages/en.json";
import fa from "@/messages/fa.json";
import { isLocale, type Locale } from "@/lib/i18n/config";

interface AddToCartButtonProps {
  product: product_type;
}

const getLocaleMessages = (locale: Locale) => (locale === "fa" ? fa : en);

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const params = useParams<{ locale: string }>();
  const locale = isLocale(params.locale) ? params.locale : "en";
  const messages = getLocaleMessages(locale).Product;
  const { items, addItem, updateQuantity } = useCartStore();

  const cartItem = items.find((item) => item.product_id === product.product_id);

  const handleAdd = () => {
    addItem({
      product_id: product.product_id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      image_url: product.image_url,
    });
  };

  const handleIncrease = () => {
    handleAdd();
  };

  const handleDecrease = () => {
    if (!cartItem) return;

    updateQuantity(product.product_id, cartItem.quantity - 1);
  };

  if (!cartItem) {
    return (
      <button
        onClick={handleAdd}
        className="rounded-2xl bg-slate-950 px-6 py-4 text-base font-black text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-sky-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-sky-200">
        {messages.addToCart}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-950 px-3 py-2 text-white shadow-xl dark:bg-slate-100 dark:text-slate-900">
      <button
        onClick={handleDecrease}
        className="duration-200 flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/20 dark:hover:bg-slate-300">
        −
      </button>

      <span className="text-lg font-bold">{cartItem.quantity}</span>

      <button
        onClick={handleIncrease}
        className="duration-200 flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/20 dark:hover:bg-slate-300">
        +
      </button>
    </div>
  );
}
