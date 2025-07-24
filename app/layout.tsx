import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import FooterNav from "@/components/footer-nav";

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-[#240046] to-[#2e003e] text-white">
          <Header />
          {children}
          <FooterNav />
          <div className="h-20" />
        </div>
      </body>
    </html>
  )
}
