import { createFileRoute } from '@tanstack/react-router';
import { WishlistPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/wishlist')({
  head: () => ({ meta: [
    { title: 'Your Wishlist — LuxeMart' },
    { name: 'description', content: 'See your saved favorite LuxeMart products in one place.' },
    { property: 'og:title', content: 'Your Wishlist — LuxeMart' },
    { property: 'og:description', content: 'See your saved favorite LuxeMart products in one place.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <WishlistPage />,
});
