import "../styles/globals.css";
import type { Metadata } from "next";
import { ChildrenProps } from "@/types";
import { Outfit_body } from "@/fonts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/section/Footer";

export const metadata: Metadata = {
  title: "Worldads | De-Pin Ad Network Infrastructure",
  description: "People Powered Distributed Ad Network Infrastructure Built On Cardano",
  keywords: ["Isometric", "Landing", "website"],
  applicationName: "Isometric",
  authors: [{ name: "Isometric Team" }],
  /**
   * Add your Graph to show the website feature image
   * when you share in twitter, linkedin, facebook, Slack etc ...
   */
  // openGraph: {
  //   images: "/og-image.png",
  //   title: "Isometric",
  //   description: "Isometric",
  //   type: "website",
  //   locale: "en_US",
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png`,
  //   siteName: "Bardui",
  // },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Outfit_body.className} bg-brand-primary antialiased`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
