import { createFileRoute } from '@tanstack/react-router';
import { ProductsPage } from '@/components/shop/Pages';
export const Route = createFileRoute('/search')({
  validateSearch: (search: Record<string, unknown>) => ({ q: typeof search['q'] === 'string' ? search['q'] : '' }),
  head: () => ({ meta: [
    { title: 'Search Products — LuxeMart' }, { name: 'description', content: 'Find your favorite products at LuxeMart.' },
    { property: 'og:title', content: 'Search Products — LuxeMart' }, { property: 'og:description', content: 'Find your favorite products at LuxeMart.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => { const { q } = Route.useSearch(); return <ProductsPage key={q} initialQuery={q} />; },
});
