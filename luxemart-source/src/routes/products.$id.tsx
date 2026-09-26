import { createFileRoute } from '@tanstack/react-router';
import { DetailsPage } from '@/components/shop/Pages';
import { products } from '@/data/products';

export const Route = createFileRoute('/products/$id')({
  head: ({ params }) => {
    const product = products.find(p => p.id === params.id);
    const title = product ? `${product.name} — LuxeMart` : 'Product Not Found — LuxeMart';
    const description = product?.description || 'Browse the LuxeMart product collection.';
    return { meta: [
      { title }, { name: 'description', content: description },
      { property: 'og:title', content: title }, { property: 'og:description', content: description },
      { property: 'og:type', content: 'product' }, { name: 'twitter:card', content: 'summary_large_image' },
    ] };
  },
  component: () => { const { id } = Route.useParams(); return <DetailsPage key={id} id={id} />; },
});
