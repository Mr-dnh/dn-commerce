import { MetadataRoute } from "next";
import { getProducts } from "@/api/axiosConfig";
import { locales } from "@/lib/i18n/config";

const baseUrl = "https://aidin-commerce.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now },
    ...locales.flatMap((locale) => [
      { url: `${baseUrl}/${locale}`, lastModified: now },
      { url: `${baseUrl}/${locale}/products`, lastModified: now },
      ...products.map((product) => ({
        url: `${baseUrl}/${locale}/products/${product.product_id}`,
        lastModified: now,
      })),
    ]),
  ];
}
