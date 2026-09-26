import { createFileRoute } from '@tanstack/react-router';
import { ProductsPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/products/')({
  validateSearch: (search: Record<string, unknown>) => ({ q: typeof search['q'] === 'string' ? search['q'] : '' }),
  head: () => ({ meta: [
    { title: 'Shop All Products — LuxeMart' },
    { name: 'description', content: 'Search and filter the LuxeMart collection of fashion, home, electronics, beauty and accessories.' },
    { property: 'og:title', content: 'Shop All Products — LuxeMart' },
    { property: 'og:description', content: 'Search and filter the LuxeMart collection of fashion, home, electronics, beauty and accessories.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => { const { q } = Route.useSearch(); return <ProductsPage key={q} initialQuery={q} />; },
});
