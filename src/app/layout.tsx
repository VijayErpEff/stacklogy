import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stacklogy — Enterprise Cloud & DevOps Solutions | AWS Platinum Partner",
    template: "%s | Stacklogy",
  },
  description:
    "Stacklogy helps enterprises migrate, optimize, and automate cloud infrastructure on AWS, Azure, and GCP. AWS Platinum Partner since 2016.",
  keywords: [
    "cloud migration",
    "AWS partner",
    "DevOps",
    "cloud transformation",
    "Kubernetes",
    "enterprise cloud",
    "infrastructure automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stacklogy.com",
    siteName: "Stacklogy",
    title: "Stacklogy — Your Cloud. Engineered Right.",
    description:
      "Enterprise cloud migration, DevOps, AI, and RPA solutions. AWS Platinum Partner.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stacklogy — Your Cloud. Engineered Right.",
    description:
      "Enterprise cloud migration, DevOps, AI, and RPA solutions. AWS Platinum Partner.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrains.variable} font-sans antialiased bg-[#0A0A0A] text-white overflow-x-hidden`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
