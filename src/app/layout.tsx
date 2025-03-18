import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import siteConfig from "@/lib/siteConfig";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import SideBar from "@/components/ui/SideBar";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ['latin'], // Load only necessary subsets
  variable: '--font-inter', // Optional: define CSS variable
  weight: ['400', '700'], // Optional: specify weights
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-950 text-white antialiased`}
      >
        <div className="flex">
        <div>
        <SideBar />
        </div>
        <div>
        <MaxWidthContainer>{children}</MaxWidthContainer>
        </div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
