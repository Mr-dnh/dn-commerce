"use client";

import { menuItems } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      {/* دکمه همبرگر */}
      <button
        onClick={toggleMenu}
        className="rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:bg-slate-100  focus:outline-none focus:ring-2 focus:ring-slate-900/20 flex flex-col justify-center items-center size-10 space-y-1"
        aria-label="منو">
        <span
          className={`block w-4 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-4 h-0.5 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-4 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* منوی کشویی (زیرمنو) */}
      {isOpen && (
        <div className="absolute top-13 -left-3 w-40 bg-white shadow-lg rounded-md border py-2 z-50">
          <ul className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-100">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
