import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import "@/sections/Header";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: 'Sahad Daily | Web Design & Digital Marketing Agency',
  description: 'Expert web design and digital marketing solutions to grow your business. We create stunning, conversion-focused websites and implement results-driven marketing strategies.',
  keywords: 'web design, digital marketing, SEO, website development, marketing agency, brand strategy, Sahad Daily, sahad daily',
  openGraph: {
    title: 'Sahad Daily | Web Design & Digital Marketing Agency',
    description: 'Transform your online presence with our expert web design and digital marketing solutions. Get stunning, conversion-focused websites and data-driven strategies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sahad Daily',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahad Daily | Web Design & Digital Marketing Agency',
    description: 'Elevate your brand with professional web design and strategic digital marketing. Let\'s grow your business together.',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-64x64.png', type: 'image/png', sizes: '64x64' },
      { url: '/favicon-128x128.png', type: 'image/png', sizes: '128x128' },
    ],
  },
  verification: {
    google: 'G0mmWzC9rBrM9YXXlsvAXB67BQ4YvIWwV1VZ89RFrwE',
  },
  alternates: {
    canonical: 'https://www.sahaddaily.com', // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}