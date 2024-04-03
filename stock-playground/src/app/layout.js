import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stocks Playground",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          
          <div className="flex h-full">
            <div className="w-1/3">
              <Navbar />
            </div>
            <div className="w-2/3">
              {children}
            </div>

          </div>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
