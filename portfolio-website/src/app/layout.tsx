import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Engineer Portfolio | Your Name",
  description: "Professional portfolio of a Data Engineer specializing in data ingestion, processing, and analytics solutions.",
  keywords: ["Data Engineer", "Portfolio", "Data Analytics", "Machine Learning", "ETL", "Data Pipeline"],
  authors: [{ name: "Your Name" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
