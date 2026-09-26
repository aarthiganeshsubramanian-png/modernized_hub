import { createFileRoute } from '@tanstack/react-router';
import { CartPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/cart')({
  head: () => ({ meta: [
    { title: 'Shopping Bag — LuxeMart' },
    { name: 'description', content: 'Review the products in your LuxeMart shopping bag.' },
    { property: 'og:title', content: 'Shopping Bag — LuxeMart' },
    { property: 'og:description', content: 'Review the products in your LuxeMart shopping bag.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <CartPage />,
});
