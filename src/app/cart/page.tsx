"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

const formatPrice = (price: string) => {
  const numPrice = parseFloat(price.replace(/[^0-9.]/g, ""));
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
    maximumFractionDigits: 0,
  }).format(numPrice);
};

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCartStore();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-slate-500 py-16 dark:bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Your Cart
          </h1>
          <div className="mt-8 rounded-2xl bg-white p-12 shadow-lg dark:bg-slate-800 dark:shadow-slate-900/30">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Your cart is empty
            </p>
            <Link
              href="/products"
              className="mt-4 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
              Start Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-300 py-16 dark:bg-slate-950">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
          Your Cart
        </h1>

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lg dark:bg-slate-800 dark:shadow-slate-900/30">
              <Link href={`/products/${item.product_id}`}>
                <div className="relative size-20 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="flex-1">
                <Link href={`/products/${item.product_id}`}>
                  <h3 className="font-bold text-slate-900 hover:underline line-clamp-2 dark:text-white">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {item.brand}
                </p>
                <p className="font-bold text-slate-900 dark:text-white">
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.product_id, item.quantity - 1)
                  }
                  className="flex size-8 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700">
                  -
                </button>
                <span className="w-8 text-center font-bold dark:text-white">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(item.product_id, item.quantity + 1)
                  }
                  className="flex size-8 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700">
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.product_id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                aria-label="Remove item">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800 dark:shadow-slate-900/30">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-slate-900 underline dark:text-white">
              {getTotalItems()} item{getTotalItems() > 1 && "s"} to ship
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              Total: {formatPrice(totalPrice.toString())}
            </span>
          </div>

          <div className="mt-4 flex gap-4">
            <button
              onClick={clearCart}
              className="flex-1 rounded-full border border-red-300 px-6 py-3 font-bold text-red-500 transition hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30">
              Clear Cart
            </button>
            <button className="flex-1 rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
              Checkout →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
