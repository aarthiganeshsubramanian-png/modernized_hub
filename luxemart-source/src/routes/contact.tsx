import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/shop/Pages';

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [
    { title: 'Contact Us — LuxeMart' },
    { name: 'description', content: 'Get in touch with LuxeMart using our demo contact form.' },
    { property: 'og:title', content: 'Contact Us — LuxeMart' },
    { property: 'og:description', content: 'Get in touch with LuxeMart using our demo contact form.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <ContactPage />,
});
