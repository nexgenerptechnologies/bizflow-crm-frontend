import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getFrappeUrl } from "@/lib/frappe";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const sid = (await cookies()).get('sid')?.value;
  if (!sid) redirect('/login');

  const baseUrl = await getFrappeUrl();

  // Verify Super Admin
  const userRes = await fetch(`${baseUrl}/api/method/frappe.auth.get_logged_user`, {
    headers: { "Cookie": `sid=${sid}` }, cache: 'no-store'
  });
  const userData = await userRes.json();
  if (userData.message !== "Administrator") {
    return <div style={{padding: '3rem', textAlign: 'center'}}><h1>Access Denied</h1><p>Only the Super Admin can view this dashboard.</p></div>;
  }

  return (
    <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827' }}>Super Admin Dashboard</h1>
          <p style={{ color: '#6b7280' }}>Multi-Site Architecture Enabled</p>
        </div>
      </header>

      <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', textAlign: 'center' }}>
        <h2 style={{fontSize: '24px', fontWeight: 700, marginBottom: '16px'}}>Tenant Management moved to Frappe Cloud</h2>
        <p style={{color: '#4b5563', marginBottom: '24px', fontSize: '16px'}}>
          Because your SaaS uses <strong>Physical Multi-Site Isolation</strong>, creating a new tenant requires spinning up a new isolated database. You no longer manage tenants from inside the CRM.
        </p>
        <a href="https://frappecloud.com/dashboard" target="_blank" rel="noreferrer" style={{ background: 'var(--accent-color)', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, display: 'inline-block' }}>
          Open Frappe Cloud Dashboard
        </a>
      </div>
    </div>
  );
}
