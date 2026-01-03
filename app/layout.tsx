import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export const metadata: Metadata = {
  title: "Laiktech",
  description: "IT Consulting",
};

export const montBlack = localFont(
  { src: "../public/fonts/Mont-Black.otf", variable: "--font-mont-black", }
);

export const satoshi = localFont(
  {
    src: [
      { path: "../public/fonts/Satoshi-Regular.otf", weight: "400", style: "normal" },
      { path: "../public/fonts/Satoshi-Medium.otf", weight: "500", style: "normal" },
      { path: "../public/fonts/Satoshi-Bold.otf", weight: "700", style: "normal" },
      { path: "../public/fonts/Satoshi-Black.otf", weight: "900", style: "normal" }
    ],
    variable: "--font-satoshi"
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${montBlack.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
