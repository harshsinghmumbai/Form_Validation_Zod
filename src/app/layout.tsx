import type { Metadata } from "next";
import { Andika } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const andika = Andika({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Validation using zod and shadcn/ui",
  description: "Created Validation using zod and shadcn/ui Component library",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={andika.className}>
        <main> {children}</main>
        <Toaster />
      </body>
    </html>
  );
}
