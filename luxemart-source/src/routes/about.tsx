import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: 'Our Story — LuxeMart' },
    { name: 'description', content: 'Learn more about LuxeMart and our thoughtfully curated collections.' },
    { property: 'og:title', content: 'Our Story — LuxeMart' },
    { property: 'og:description', content: 'Learn more about LuxeMart and our thoughtfully curated collections.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <AboutPage />,
});
