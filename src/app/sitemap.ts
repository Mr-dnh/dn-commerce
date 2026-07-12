import { MetadataRoute } from "next";
import { getProducts } from "@/api/axiosConfig";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();

  return [
    {
      url: "https://aidin-commerce.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://aidin-commerce.vercel.app/products",
      lastModified: new Date(),
    },

    ...products.map((product) => ({
      url: `https://aidin-commerce.vercel.app/products/${product.product_id}`,
      lastModified: new Date(),
    })),
  ];
}