import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "zh-CN": siteConfig.url,
      en: `${siteConfig.url}/en/`,
      fr: `${siteConfig.url}/fr/`,
      ja: `${siteConfig.url}/ja/`,
      ko: `${siteConfig.url}/ko/`,
      es: `${siteConfig.url}/es/`,
      "x-default": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/images/campus-autumn.png",
        width: 1672,
        height: 941,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
