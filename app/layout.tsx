import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
        <ThemeScript />
      </body>
    </html>
  );
}
