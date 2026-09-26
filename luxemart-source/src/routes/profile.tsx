import { createFileRoute } from '@tanstack/react-router';
import { ProfilePage } from '@/components/shop/Pages';

export const Route = createFileRoute('/profile')({
  head: () => ({ meta: [
    { title: 'Your Account — LuxeMart' },
    { name: 'description', content: 'View your LuxeMart demo profile and saved items.' },
    { property: 'og:title', content: 'Your Account — LuxeMart' },
    { property: 'og:description', content: 'View your LuxeMart demo profile and saved items.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <ProfilePage />,
});
