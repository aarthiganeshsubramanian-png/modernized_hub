import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/register')({
  head: () => ({ meta: [
    { title: 'Create Account — LuxeMart' },
    { name: 'description', content: 'Create your LuxeMart demo profile.' },
    { property: 'og:title', content: 'Create Account — LuxeMart' },
    { property: 'og:description', content: 'Create your LuxeMart demo profile.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <AuthPage mode="register" />,
});
