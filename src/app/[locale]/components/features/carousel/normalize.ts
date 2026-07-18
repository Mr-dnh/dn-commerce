import { product_type } from "@/lib/types";

export function normalizePictures(
  carousel: product_type | product_type[]
): product_type[] {
  if (Array.isArray(carousel)) {
    return carousel.filter((picture) => Boolean(picture.image_url));
  }

  return Object.values(carousel)
    .flatMap((value) => (Array.isArray(value) ? value : [value]))
    .map((value) => {
      if (typeof value === "string") {
        return { image_url: value, alt: "Carousel image", title: "" };
      }
      return value;
    })
    .filter((value): value is product_type => Boolean(value?.image_url));
}