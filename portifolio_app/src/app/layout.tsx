import type { Metadata } from "next";
import {Montserrat, Montserrat_Subrayada, DM_Serif_Text, Electrolize} from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight:['400','500','600','700'] });
export const electrolize = Electrolize({
   subsets: ["latin"],
    weight:'400',
    variable: '--font-electrolize'
});
export const serif = DM_Serif_Text({
  subsets: ["latin"],
  weight:'400',
  variable: '--font-Serif'
});

export const montserrat_Subrayada = Montserrat_Subrayada({
  weight: '700',
  variable: '--font-montserrat-subrayada',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Vinicius Soares - Portifolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={`${montserrat.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
