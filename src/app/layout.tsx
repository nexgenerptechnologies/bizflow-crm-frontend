import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BizFlow CRM",
  description: "Colorful CRM for Indian SMEs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-layout">
          <aside className="sidebar">
            <div className="logo">
              <div className="logo-icon">B</div>
              BizFlow
            </div>
            <nav className="nav-links">
              <Link href="/" className="nav-item active">
                <span style={{fontSize: '20px'}}>📊</span> Deals Pipeline
              </Link>
              <Link href="/contacts" className="nav-item">
                <span style={{fontSize: '20px'}}>👥</span> Contacts
              </Link>
              <Link href="/quotations" className="nav-item">
                <span style={{fontSize: '20px'}}>📝</span> Quotations
              </Link>
              <Link href="/invoices" className="nav-item">
                <span style={{fontSize: '20px'}}>💰</span> GST Invoices
              </Link>
              <Link href="/settings" className="nav-item">
                <span style={{fontSize: '20px'}}>⚙️</span> Settings
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
