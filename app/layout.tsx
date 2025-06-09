import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next Textile",
    template: "Next Textile | %s",
  },
  description: "Next application with textile parser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>

        <script defer src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/honoblog/theme-button.js" data-nscript="afterInteractive"></script>
      </body>
    </html>
  );
}
