import { createFileRoute } from '@tanstack/react-router';
import { ConfirmationPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/order-confirmation')({
  head: () => ({ meta: [
    { title: 'Order Confirmation — LuxeMart' },
    { name: 'description', content: 'Your LuxeMart demo order has been confirmed.' },
    { property: 'og:title', content: 'Order Confirmation — LuxeMart' },
    { property: 'og:description', content: 'Your LuxeMart demo order has been confirmed.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <ConfirmationPage />,
});
