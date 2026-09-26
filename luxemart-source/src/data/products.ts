import bag from '@/assets/bag.webp';
import headphones from '@/assets/headphones.webp';
import lamp from '@/assets/lamp.webp';
import perfume from '@/assets/perfume.webp';
import sneakers from '@/assets/sneakers.webp';
import watch from '@/assets/watch.webp';
import chair from '@/assets/chair.webp';
import sunglasses from '@/assets/sunglasses.webp';
import vase from '@/assets/vase.webp';

export type Product = { id: string; name: string; category: string; price: number; originalPrice: number; rating: number; reviews: number; image: string; description: string; available: boolean; keywords: string; new?: boolean };
export const products: Product[] = [
  { id: 'everyday-leather-bag', name: 'Everyday Leather Crossbody', category: 'Accessories', price: 4299, originalPrice: 5999, rating: 4.9, reviews: 128, image: bag, description: 'An effortlessly versatile companion crafted with a refined silhouette and thoughtfully considered details. Made for every day, and every occasion.', available: true, keywords: 'handbag purse leather fashion tan', new: true },
  { id: 'studio-wireless-headphones', name: 'Studio Wireless Headphones', category: 'Electronics', price: 6499, originalPrice: 8499, rating: 4.8, reviews: 96, image: headphones, description: 'Lose yourself in rich, balanced sound with all-day comfort and a beautifully minimal wireless design.', available: true, keywords: 'audio music bluetooth silver noise cancelling' },
  { id: 'arc-ceramic-table-lamp', name: 'Arc Ceramic Table Lamp', category: 'Home & Living', price: 3799, originalPrice: 4999, rating: 4.7, reviews: 54, image: lamp, description: 'A softly glowing ceramic statement piece that brings warmth and quiet character to your space.', available: true, keywords: 'lighting decor ivory bedroom', new: true },
  { id: 'amber-noir-eau-de-parfum', name: 'Amber Noir Eau de Parfum', category: 'Beauty', price: 2899, originalPrice: 3599, rating: 4.8, reviews: 214, image: perfume, description: 'A warm, captivating fragrance with notes of amber, soft florals and a lingering woody finish.', available: true, keywords: 'fragrance scent perfume cologne' },
  { id: 'essential-leather-sneakers', name: 'Essential Leather Sneakers', category: 'Fashion', price: 4599, originalPrice: 5999, rating: 4.6, reviews: 87, image: sneakers, description: 'Clean lines and everyday comfort meet in these timeless low-top leather sneakers.', available: true, keywords: 'shoes white footwear trainers' },
  { id: 'classic-analog-watch', name: 'Classic Analog Watch', category: 'Accessories', price: 7499, originalPrice: 9999, rating: 4.9, reviews: 72, image: watch, description: 'An understated timepiece with a polished steel case and supple leather strap.', available: true, keywords: 'wristwatch timepiece silver black', new: true },
  { id: 'olive-lounge-chair', name: 'Olive Lounge Chair', category: 'Home & Living', price: 18999, originalPrice: 22999, rating: 4.7, reviews: 39, image: chair, description: 'A sculptural accent chair wrapped in rich olive upholstery for slow, comfortable moments.', available: false, keywords: 'furniture seating green living room' },
  { id: 'noir-frame-sunglasses', name: 'Noir Frame Sunglasses', category: 'Fashion', price: 2199, originalPrice: 2999, rating: 4.5, reviews: 146, image: sunglasses, description: 'A modern classic with a confident frame and easy, everyday wearability.', available: true, keywords: 'eyewear shades black accessories' },
  { id: 'sculptural-ceramic-vase', name: 'Sculptural Ceramic Vase', category: 'Home & Living', price: 1899, originalPrice: 2499, rating: 4.8, reviews: 62, image: vase, description: 'An artful ceramic silhouette that looks just as beautiful with flowers as it does on its own.', available: true, keywords: 'decor pottery cream vessel' },
];
export const categories = ['Fashion', 'Accessories', 'Electronics', 'Home & Living', 'Beauty'];
export const money = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;
export const discount = (p: Product) => Math.round((1 - p.price / p.originalPrice) * 100);
