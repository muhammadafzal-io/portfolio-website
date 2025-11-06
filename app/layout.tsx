import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingParticles from "@/components/floating-particles";
import ParallaxWrapper from "@/components/provider/parallax-provider";

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Afzal - Full Stack Engineer",
  description:
    "Full-stack software engineer specializing in React, Next.js, and Node.js. Building scalable web applications and payment systems.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_poppins.className}`}>
        <ParallaxWrapper>
          <FloatingParticles />
          {children}
        </ParallaxWrapper>
      </body>
    </html>
  );
}
