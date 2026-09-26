import { createFileRoute } from '@tanstack/react-router';
import { CheckoutPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/checkout')({
  head: () => ({ meta: [
    { title: 'Demo Checkout — LuxeMart' },
    { name: 'description', content: 'Review your order and complete the LuxeMart demo checkout.' },
    { property: 'og:title', content: 'Demo Checkout — LuxeMart' },
    { property: 'og:description', content: 'Review your order and complete the LuxeMart demo checkout.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <CheckoutPage />,
});
