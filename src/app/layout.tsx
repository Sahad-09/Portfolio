import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import "@/sections/Header";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import Head from "next/head"; // Import Head

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"]
});

// Use environment variable for the metadata base URL
const metadataBase = new URL(process.env.NEXT_PUBLIC_METADATA_BASE!); // Ensure it's not undefined

export const metadata: Metadata = {
  metadataBase, // Add the base URL here
  title: 'Sahad Daily | Freelance Web Design by a Passionate Student',
  description: 'Creative and affordable web design solutions tailored to your needs. As a dedicated student, I bring fresh ideas and a personal touch to your online presence.',
  keywords: 'freelance web design, student web developer, affordable websites, website development, personal projects, Sahad Daily, sahad daily',
  openGraph: {
    title: 'Sahad Daily | Freelance Web Design by a Passionate Student',
    description: 'Get creative and affordable web design solutions from a dedicated student. I bring fresh ideas and a personal touch to help you achieve your online goals.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sahad Daily',
    images: [{
      url: '/favicon.png',
      width: 1200,
      height: 630,
      alt: 'Sahad Daily - Freelance Web Design',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahad Daily | Freelance Web Design by a Passionate Student',
    description: 'Affordable and creative web design by a student with a passion for building stunning websites. Let\'s work together to achieve your vision.',
    images: ['/favicon.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
    ],
  },
  verification: {
    google: 'G0mmWzC9rBrM9YXXlsvAXB67BQ4YvIWwV1VZ89RFrwE',
  },
  alternates: {
    canonical: 'https://www.sahaddaily.in',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1074654170677572');
          fbq('track', 'PageView');`
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1074654170677572&ev=PageView&noscript=1" />
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>
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
