import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
      {/* Left Side - Image */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc', borderRight: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <img src="/login.png" alt="BizFlow CRM Enterprise Secure Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0) 100%)', color: '#ffffff' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-1px' }}>Enterprise-Grade Security.</h2>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '400px' }}>
            Every customer gets their own physically isolated database. Your data never shares the same space as other tenants.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px' }}>BizFlow CRM</h1>
            <p style={{ color: '#64748b', fontSize: '16px', marginTop: '8px' }}>Sign in to your dedicated business workspace.</p>
          </div>
          
          <LoginForm />
          
          <div style={{ textAlign: 'center', marginTop: '32px', color: '#64748b', fontSize: '14px' }}>
            Don't have an account? <a href="/signup" style={{ color: '#4f46e5', fontWeight: 600, textDecoration: 'none' }}>Start your free trial</a>
          </div>
        </div>
      </div>
    </div>
  );
}
