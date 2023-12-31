import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";

const inter = Poppins({ weight: ["300"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Illinois Marketplace",
  description: "A marketplace for University of Illinois's students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
