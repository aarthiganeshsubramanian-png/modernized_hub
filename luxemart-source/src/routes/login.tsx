import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/login')({
  head: () => ({ meta: [
    { title: 'Sign In — LuxeMart' },
    { name: 'description', content: 'Sign in to your LuxeMart demo profile.' },
    { property: 'og:title', content: 'Sign In — LuxeMart' },
    { property: 'og:description', content: 'Sign in to your LuxeMart demo profile.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <AuthPage mode="login" />,
});
