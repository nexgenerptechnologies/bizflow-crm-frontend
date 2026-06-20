import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BizFlow CRM",
  description: "Lightweight CRM for Indian SMEs",
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
            <div className="logo">BizFlow CRM</div>
            <nav className="nav-links">
              <Link href="/" className="nav-item active">Deals Pipeline</Link>
              <Link href="/contacts" className="nav-item">Contacts</Link>
              <Link href="/quotations" className="nav-item">Quotations</Link>
              <Link href="/invoices" className="nav-item">GST Invoices</Link>
              <Link href="/settings" className="nav-item">Settings</Link>
            </nav>
          </aside>
          
          <main className="main-content">
            <header className="header">
              <h1 className="page-title">Deals Pipeline</h1>
              <button className="btn-primary">+ New Deal</button>
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
