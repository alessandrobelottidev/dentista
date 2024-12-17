import { Toaster } from "@src/components/ui/sonner";
import "./globals.css";
import { poppins } from "@src/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "google-site-verification": "gsFkI_lyTlImqXu_3cBF6px8zgIEUL_HlzzVZnQxxeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${poppins.className} antialiased`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
