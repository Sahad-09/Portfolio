import type, { Metadata } from "next"
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css"
import "@/sections/Header"
import { twMerge } from "tailwind-merge";

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
  title: 'Sahad Daily',
  description: 'Your site description',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' }, // Fallback .ico file for older browsers
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }, // For standard screens
      { url: '/favicon-64x64.png', type: 'image/png', sizes: '64x64' }, // For higher-resolution displays
      { url: '/favicon-128x128.png', type: 'image/png', sizes: '128x128' }, // For very high-resolution displays
    ],
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
        {children}
      </body>
    </html>
  );
}