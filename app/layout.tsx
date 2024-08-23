import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import "./i18n.jsx";
import { Providers } from "./provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: 'Usat Admission',
    description:
        "USAT muvaffaqiyatli kelajak shu yerdan boshlanadi.USAT - Fan va Texnologiyalar Universiteti o'z ichiga zamonaviy va samarali jahon standartlari asosidagi ta'limni qamrab olgan.",
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
