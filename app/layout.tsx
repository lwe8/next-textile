import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Textile",
  description: "Next application with textile parser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <main>
          <Navbar />
          <div className="main-body">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
