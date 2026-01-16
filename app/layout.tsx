import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyCalla Studio | Creative Agency",
  description: "Shaping digital identities through creative excellence",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
