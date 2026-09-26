import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import { products } from '@/data/products';

type Cart = Record<string, number>;
type User = { name: string; email: string } | null;
type ShopState = { cart: Cart; wishlist: string[]; user: User; theme: 'light' | 'dark'; addToCart: (id: string, quantity?: number) => void; setQuantity: (id: string, quantity: number) => void; removeFromCart: (id: string) => void; toggleWishlist: (id: string) => void; setUser: (user: User) => void; toggleTheme: () => void; clearCart: () => void; count: number; subtotal: number };
const ShopContext = createContext<ShopState | null>(null);
function stored<T>(key: string, fallback: T): T { if (typeof window === 'undefined') return fallback; try { const item = localStorage.getItem(key); return item ? JSON.parse(item) as T : fallback; } catch { return fallback; } }
export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [user, setUser] = useState<User>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => { setCart(stored('luxemart-cart', {})); setWishlist(stored('luxemart-wishlist', [])); setUser(stored('luxemart-user', null)); setTheme(stored('luxemart-theme', 'light')); }, []);
  useEffect(() => { if (typeof window !== 'undefined') localStorage.setItem('luxemart-cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { if (typeof window !== 'undefined') localStorage.setItem('luxemart-wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { if (typeof window !== 'undefined') localStorage.setItem('luxemart-user', JSON.stringify(user)); }, [user]);
  useEffect(() => { if (typeof window !== 'undefined') { localStorage.setItem('luxemart-theme', JSON.stringify(theme)); document.documentElement.dataset['theme'] = theme; } }, [theme]);
  const addToCart = (id: string, quantity = 1) => { setCart(current => ({ ...current, [id]: (current[id] || 0) + quantity })); toast.success('Added to your bag'); };
  const setQuantity = (id: string, quantity: number) => setCart(current => { const next = { ...current }; if (quantity <= 0) delete next[id]; else next[id] = quantity; return next; });
  const removeFromCart = (id: string) => { setQuantity(id, 0); toast.info('Removed from your bag'); };
  const toggleWishlist = (id: string) => setWishlist(current => { const exists = current.includes(id); toast(exists ? 'Removed from wishlist' : 'Saved to wishlist'); return exists ? current.filter(x => x !== id) : [...current, id]; });
  const toggleTheme = () => setTheme(current => current === 'light' ? 'dark' : 'light');
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const subtotal = products.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);
  return <ShopContext.Provider value={{ cart, wishlist, user, theme, addToCart, setQuantity, removeFromCart, toggleWishlist, setUser, toggleTheme, clearCart: () => setCart({}), count, subtotal }}>{children}</ShopContext.Provider>;
}
export function useShop() { const value = useContext(ShopContext); if (!value) throw new Error('ShopProvider missing'); return value; }
