import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/shop/Pages';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'LuxeMart — Live beautifully, every day' },
    { name: 'description', content: 'Discover thoughtfully curated fashion, accessories, home pieces and beauty at LuxeMart.' },
    { property: 'og:title', content: 'LuxeMart — Live beautifully, every day' },
    { property: 'og:description', content: 'Discover thoughtfully curated fashion, accessories, home pieces and beauty at LuxeMart.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: HomePage,
});