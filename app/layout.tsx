import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import N8nChat from "./components/N8nChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brew & Co. — Brooklyn Coffee Shop",
  description:
    "Specialty single-origin coffee, fresh pastries, and light lunches in Atlantic Ave, Brooklyn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-cream-100 font-display text-brown-900">
        {children}
        <N8nChat />
      </body>
    </html>
  );
}
