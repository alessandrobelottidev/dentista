import "./globals.css";
import { poppins } from "@src/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
