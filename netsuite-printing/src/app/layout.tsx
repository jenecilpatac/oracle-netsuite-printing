import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/authcontext";

export const metadata: Metadata = {
  title: {
    template: '%s | SMCT Group - Oracle NetSuite',
    default: 'SMCT Group - Oracle NetSuite'
  },
  description: "This system is intended for importing data from Oracle NetSuite and generating a uniform design related to SMCT Group of Companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
