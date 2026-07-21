export const menuItems = [
  { key: "products", href: "/products" },
  { key: "collections", href: "/#collections" },
  { key: "deals", href: "/#deals" },
  { key: "contact", href: "/#contact" },
] as const;

export const footerSections = [
  {
    titleKey: "shop",
    links: [
      { key: "newArrivals", href: "/#new-arrivals" },
      { key: "bestSellers", href: "/#best-sellers" },
      { key: "giftCards", href: "/#gift-cards" },
    ],
  },
  {
    titleKey: "support",
    links: [
      { key: "contact", href: "/#contact" },
      { key: "shipping", href: "/#shipping" },
      { key: "returns", href: "/#returns" },
    ],
  },
  {
    titleKey: "company",
    links: [
      { key: "about", href: "/#about" },
      { key: "careers", href: "/#careers" },
      { key: "privacy", href: "/#privacy" },
    ],
  },
] as const;

export const comments = [
  { name: "Sara M.", text: "The custom finish looks even better in person. My Nazanin piece became the centerpiece of my shelf." },
  { name: "Jon R.", text: "Fast delivery, solid balance, and the Batmani design has exactly the bold style I wanted." },
  { name: "Mina K.", text: "I bought a starter piece as a gift and came back for a custom model the next week." },
  { name: "حسینعلی", text: "همین دیروز به دستم رسیدن. خیلی قشنگه" },
];
