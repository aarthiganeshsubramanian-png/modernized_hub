import { createFileRoute } from '@tanstack/react-router';
import { CategoriesPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/categories')({
  head: () => ({ meta: [
    { title: 'Shop Categories — LuxeMart' },
    { name: 'description', content: 'Explore thoughtfully curated fashion, home, beauty, electronics and accessories.' },
    { property: 'og:title', content: 'Shop Categories — LuxeMart' },
    { property: 'og:description', content: 'Explore thoughtfully curated fashion, home, beauty, electronics and accessories.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <CategoriesPage />,
});
