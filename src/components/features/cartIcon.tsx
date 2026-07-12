"use client";

import type { Locale } from "@/lib/i18n/config";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function CartIcon({ locale, label }: { locale: Locale; label: string }) {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const isClient = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  return (
    <Link href={`/${locale}/cart`} className="relative inline-flex items-center" aria-label={label}>
      <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {isClient && totalItems > 0 && <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[12px] font-bold text-white">{totalItems}</span>}
    </Link>
  );
}
