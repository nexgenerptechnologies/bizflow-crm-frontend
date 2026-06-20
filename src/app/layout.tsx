import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// Switching to Inter font for a highly professional B2B look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BizFlow CRM",
  description: "High-end CRM for Indian Enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dashboard-layout">
          <aside className="sidebar">
            <div className="logo">
              <div className="logo-icon">B</div>
              BizFlow
            </div>
            <nav className="nav-links">
              <Link href="/" className="nav-item active">
                Pipeline
              </Link>
              <Link href="/contacts" className="nav-item">
                Contacts
              </Link>
              <Link href="/quotations" className="nav-item">
                Quotations
              </Link>
              <Link href="/invoices" className="nav-item">
                GST Invoices
              </Link>
              <Link href="/settings" className="nav-item">
                Settings
              </Link>
            </nav>
          </aside>
          
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}