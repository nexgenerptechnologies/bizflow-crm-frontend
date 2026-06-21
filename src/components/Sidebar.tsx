"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">B</div>
        BizFlow
      </div>
      <nav className="nav-links">
        <Link href="/pipeline" className={`nav-item ${pathname === '/pipeline' ? 'active' : ''}`}>
          Pipeline
        </Link>
        <Link href="/contacts" className={`nav-item ${pathname === '/contacts' ? 'active' : ''}`}>
          Contacts
        </Link>
        <Link href="/quotations" className={`nav-item ${pathname === '/quotations' ? 'active' : ''}`}>
          Quotations
        </Link>
        <Link href="/invoices" className={`nav-item ${pathname === '/invoices' ? 'active' : ''}`}>
          GST Invoices
        </Link>
        <Link href="/settings" className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}>
          Settings
        </Link>
      </nav>
    </aside>
  );
}
