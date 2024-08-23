import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import "./i18n.jsx";
import { Providers } from "./provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: 'University of Science and Technologies',
    description:
        'Learn about the admission process at the University of Science and Technology. Explore our programs, apply now, and start your journey towards a successful future.',
    keywords:
        'university admissions, science and technology, apply now, higher education, study programs, student applications',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    authors: [
        {
            name: 'University of Science and Technology',
            url: 'https://qabul.usat.uz/',
        },
    ],
    icons: {
        icon: [
            { rel: 'icon', url: './favicon.ico', type: 'image/x-icon' },
            {
                rel: 'icon',
                url: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
        ],
        apple: [
            {
                rel: 'apple-touch-icon',
                url: '/apple-touch-icon.png',
                sizes: '180x180',
            },
        ],
        
    },
    openGraph: {
        title: 'University of Science and Technologies',
        description:
            'Learn about the admission process at the University of Science and Technology. Explore our programs, apply now, and start your journey towards a successful future.',
        url: 'https://qabul.usat.uz/',
        siteName: 'University of Science and Technologies',
        images: [
            {
                url: 'https://qabul.usat.uz/assets/logos/back.png',
                width: 1200,
                height: 630,
                alt: 'University of Science and Technologies',
            },
        ],
        type: 'website',
    },
    twitter: {
        title: 'University of Science and Technologies',
        card: 'summary_large_image',
        description:
            'Learn about the admission process at the University of Science and Technology. Explore our programs, apply now, and start your journey towards a successful future.',
        images: [
            {
                url: 'https://qabul.usat.uz/assets/logos/back.png',
                width: 1200,
                height: 630,
                alt: 'University of Science and Technologies',
            },
        ],
        creator: '@qabul.uz',
    }
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <Providers> {children}</Providers>
          </body>
          
      </html>
  );
}
