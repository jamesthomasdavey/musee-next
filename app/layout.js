import Link from 'next/link';
import { Inter } from "next/font/google";
import "./globals.css";

import Header from './components/Header/Header'

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
        <footer>
          <address>
            <div>Pier 45</div>
            <div>Fisherman's Wharf</div>
            <div>San Francisco, CA 94113</div>
          </address>
          <div>
            <div>Open Everyday</div>
            <div>10 AM - 8 PM</div>
            <div><Link href="contact">Contact Us</Link></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
