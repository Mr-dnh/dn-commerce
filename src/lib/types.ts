export type CarouselPicture = {
product_id: string,
title: string,
brand: string,
price: string,
currency: string,
color: string,
size_available: string,
product_url: string,
image_url: string,
product_code: string,
product_type: string,
has_variant_colours: boolean,
};

export type CarouselProps = {
  album: CarouselPicture[];
  className?: string;
};
