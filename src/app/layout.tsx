import type { Metadata } from "next";
import Image from "next/image";
import background from "@/app/static/background.jpg"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voces de Medellin",
  description: "Juego para contexto político",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width,heigth=device-height initial-scale=1.0"></meta>
      <body className={inter.className} style={{
        // use the src property of the image object
        backgroundImage: `url(${background.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="border-8 p-12 rounded-2xl bg-white/40 border-white/80">
          {children}
        </div>



      </body>
    </html>
  );
}
