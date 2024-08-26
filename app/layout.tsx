import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import "./i18n.jsx";
import { Providers } from "./provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: 'Fan va texnalogiyalar universiteti',
    description:
        "Fan va texnologiyalar universiteti - fan va zamonaviy texnologiyalar mujassam bo'lgan universitet!",
    keywords:
        "qabul usat,usat,fan va texnalogiyalat universiteti,hujjat topshirish,oliy ta'lim,bakalavr,magistr,student arizasi,universitetga qabul",
    robots: 'index, follow,page',
    viewport: 'width=device-width, initial-scale=1.0',
    authors: [
        {
            name: 'Fan va texnalogiyalar universiteti',
            url: 'https://usat.uz/',
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
        title: 'fan va texnalogiyalar universiteti',
        description:
            "Fan va texnologiyalar universiteti - fan va zamonaviy texnologiyalar mujassam bo'lgan universitet!",
        url: 'https://usat.uz/',
        siteName: 'Fan va texnalogiyalar universiteti',
        images: [
            {
                url: 'https://usat.uz/assets/logos/back.png',
                width: 1200,
                height: 630,
                alt: 'A girl standing in the library of Usat University with a book in her hand',
            },
        ],
        type: 'website',
    },
    twitter: {
        title: 'Fan va texnalogiyalar universiteti',
        card: 'summary_large_image',
        description:
            "Fan va texnologiyalar universiteti - fan va zamonaviy texnologiyalar mujassam bo'lgan universitet!",
        images: [
            {
                url: 'https://usat.uz/assets/logos/back.png',
                width: 1200,
                height: 630,
                alt: 'Fan va texnalogiyalar universiteti',
            },
        ],
        creator: 'https://github.com/iqboljon-0203',
    },
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
