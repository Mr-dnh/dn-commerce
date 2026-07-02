import axios from 'axios';
import { CarouselPicture } from '@/lib/types';

// دیتا رو از public میگیریم
let cachedProducts: CarouselPicture[] = [];

export const fetchProducts = async (): Promise<CarouselPicture[]> => {
  if (cachedProducts.length > 0) {
    return cachedProducts;
  }

  try {
    // ✅ توی Vercel خودش آدرس رو میده
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    const response = await axios.get(`${baseUrl}/data.json`);
    cachedProducts = response.data;
    return cachedProducts;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
};

// برای استفاده در Server Components
export const getProducts = async () => {
  return await fetchProducts();
};

// تابع برای پیدا کردن محصول با ID
export const getProductById = async (id: string) => {
  const products = await fetchProducts();
  return products.find(p => p.product_id === id);
};

// تابع برای فیلتر بر اساس برند
export const getProductsByBrand = async (brand: string) => {
  const products = await fetchProducts();
  return products.filter(p => 
    p.brand.toLowerCase().includes(brand.toLowerCase())
  );
};