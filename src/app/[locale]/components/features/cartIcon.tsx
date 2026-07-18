"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function CartIcon() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const t = useTranslations("Header");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center"
      aria-label={t("openCart")}>
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>

      {isClient && totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            backgroundColor: "#ef4444",
            color: "white",
            fontSize: "10px",
            fontWeight: 700,
            borderRadius: "9999px",
            zIndex: 10,
          }}>
          {totalItems}
        </span>
      )}
    </Link>
  );
}
