import type { Metadata } from "next";
import { inter } from "./utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowers Market",
  description: "For Farmers and Retailers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <main className={inter.className}>{children}</main>
</>
  );
}
