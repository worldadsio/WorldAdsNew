import "../styles/globals.css";
import type { Metadata } from "next";
import { ChildrenProps } from "@/types";
import { Outfit_body } from "@/fonts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/section/Footer";
import Script from "next/script"; // Import the Script component

export const metadata: Metadata = {
  title: "WorldAds | De-Pin Ad Network Infrastructure",
  description: "People Powered Distributed Ad Network Infrastructure Built On Cardano",
  keywords: [
    "Transform Your Advertising with WorldAds",
    "Connect Advertisers with High-Visibility Digital Screens",
    "Dynamic Marketplace for Digital Out-of-Home (DOOH) Advertising",
    "Reach Target Audiences with Location-Based Campaigns",
    "Empowering Advertisers and Node Operators with Cutting-Edge Tools",
    "Earn Passive Income with Your Digital Screens",
    "Effortless Campaign Management and Real-Time Insights",
    "Monetize Rooftops, Taxis, and Prime Locations",
    "Revolutionizing DOOH Advertising with Innovation",
    "Seamless Ad Delivery with Intelligent Scheduling",
    "Track, Analyze, and Optimize Your Ad Performance",
    "Your One-Stop Platform for DOOH Advertising Success"
  ],
  applicationName: "WorldAds",
  authors: [{ name: "Tahir Ramzan" }]
};


export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BQE1EGXVQV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BQE1EGXVQV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${Outfit_body.className} bg-brand-primary antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
