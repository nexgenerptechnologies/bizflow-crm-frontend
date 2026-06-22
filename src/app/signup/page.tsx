"use client";

import { useState } from "react";
import { createTenantSiteAction } from "./actions";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [subdomain, setSubdomain] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await createTenantSiteAction(formData);

    if (result.error) {
      alert(result.error);
      setLoading(false);
    } else if (result.redirectUrl) {
      window.location.href = result.redirectUrl;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Left Side - Image */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc', borderRight: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <img src="/signup.png" alt="BizFlow CRM Growth Engine" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0) 100%)', color: '#ffffff' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-1px' }}>Deploy in 60 seconds.</h2>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '400px' }}>
            Instantly spin up your dedicated BizFlow CRM database without entering a credit card. Join dozens of fast-growing businesses.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', position: 'relative' }}>
        
        {loading && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.95)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
            <div style={{ width: '48px', height: '48px', border: '4px solid #e2e8f0', borderTopColor: '#4f46e5', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            <h3 style={{ marginTop: '24px', fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>Provisioning Server...</h3>
            <p style={{ color: '#64748b', fontSize: '15px', marginTop: '12px', textAlign: 'center', maxWidth: '300px', lineHeight: 1.5 }}>
              We are spinning up an isolated database for you on BizFlow CRM. This takes about 60 seconds.
            </p>
          </div>
        )}

        <div style={{ width: '100%', maxWidth: '440px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px' }}>Start Your Free Trial</h1>
            <p style={{ color: '#64748b', fontSize: '16px', marginTop: '8px' }}>Create your dedicated workspace instantly.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#334155' }}>Company Name</label>
              <input name="company" type="text" placeholder="Acme Corp" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#334155' }}>Workspace Subdomain</label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
                <input 
                  name="subdomain" 
                  style={{ border: 'none', background: 'transparent', flex: 1, padding: '14px 16px', fontSize: '16px', outline: 'none' }} 
                  placeholder="acme" 
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  required 
                />
                <span style={{ padding: '0 16px', color: '#64748b', fontSize: '15px', fontWeight: 600, background: '#e2e8f0', height: '100%', display: 'flex', alignItems: 'center' }}>
                  .nexgenerp.in
                </span>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#334155' }}>Admin Email</label>
              <input type="email" name="email" placeholder="admin@example.com" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#334155' }}>Admin Password</label>
              <input type="password" name="password" placeholder="••••••••" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none' }} />
            </div>

            <button type="submit" disabled={loading} style={{ width: '100%', padding: '16px', borderRadius: '12px', background: loading ? '#94a3b8' : '#4f46e5', color: '#ffffff', fontSize: '18px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s', boxShadow: '0 10px 15px -3px rgba(79,70,229,0.3)' }}>
              {loading ? 'Provisioning...' : 'Launch CRM Environment'}
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '32px', color: '#64748b', fontSize: '14px' }}>
            Already have an account? <a href="/login" style={{ color: '#4f46e5', fontWeight: 600, textDecoration: 'none' }}>Sign In</a>
          </div>

        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}} />
      </div>

    </div>
  );
}
