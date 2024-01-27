import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo vault",
  description: "Demo photo vault using dummy datasets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-5 sm:p-10 h-screen flex flex-col">
          <header className="text-3xl sm:text-6xl text-center mb-5 sm:mb-10">
            Photo gallery
          </header>
          <main className="h-[85%] overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
