import Link from 'next/link';
import { Inter } from "next/font/google";
import "./globals.css";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musée Mécanique",
  description: "Family owned and operated since 1933",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
