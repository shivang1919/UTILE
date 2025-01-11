import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Provider from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Utile - Thoughts to Images",
  description: "Create stunning AI-generated images from your text descriptions for free. Transform your ideas into visual art instantly with Utile's powerful AI image generation tools.",
  keywords: "AI image generation, text to image, free AI art, image creation, AI art generator, Utile",
  openGraph: {
    title: "Utile - Transform Text to Images",
    description: "Create stunning AI-generated images from your text descriptions for free",
    type: "website",
    siteName: "Utile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utile - Transform Text to Images",
    description: "Create stunning AI-generated images from your text descriptions for free",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            
          >
            <Provider>
            <Header/>
            {children}
            </Provider>
          </ThemeProvider>
      </body>
    </html>
  );
}
