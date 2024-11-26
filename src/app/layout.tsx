import { Toaster } from "@src/components/ui/sonner";
import "./globals.css";
import { poppins } from "@src/fonts";

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
