import Link from "next/link";

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 48px', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '26px', fontWeight: 900, color: '#4f46e5', letterSpacing: '-0.5px' }}>
          BizFlow CRM
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/login" style={{ color: '#475569', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}>Sign In</Link>
          <Link href="/signup" style={{ background: '#0f172a', color: '#ffffff', padding: '12px 28px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}>
            Start Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '80px 48px 120px 48px', textAlign: 'center', background: 'linear-gradient(135deg, #ffffff 0%, #eef2ff 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-block', background: '#e0e7ff', color: '#4f46e5', padding: '8px 16px', borderRadius: '20px', fontWeight: 700, fontSize: '14px', marginBottom: '24px', letterSpacing: '0.5px' }}>
            NEXT-GENERATION BUSINESS AUTOMATION
          </div>
          <h1 style={{ fontSize: '72px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-2.5px', color: '#0f172a' }}>
            Scale your sales with <br/><span style={{ background: '-webkit-linear-gradient(45deg, #4f46e5, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Zero Data Leakage.</span>
          </h1>
          <p style={{ fontSize: '22px', color: '#475569', marginBottom: '48px', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 48px auto' }}>
            The ultimate Multi-Site CRM engineered for fast-growing Indian businesses. Automate lead capture, generate 1-click GST invoices, and close deals faster.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '64px' }}>
            <Link href="/signup" style={{ background: '#4f46e5', color: '#ffffff', padding: '18px 42px', borderRadius: '12px', fontSize: '18px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 10px 25px -5px rgba(79,70,229,0.4)', transition: 'transform 0.2s' }}>
              Start Your Free Trial
            </Link>
            <a href="https://wa.me/919811920503" target="_blank" rel="noreferrer" style={{ background: '#ffffff', color: '#0f172a', padding: '18px 42px', borderRadius: '12px', fontSize: '18px', fontWeight: 700, textDecoration: 'none', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              Talk to Sales
            </a>
          </div>

          {/* Hero Image */}
          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', border: '1px solid #e2e8f0', background: '#ffffff', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <img src="/hero.png" alt="BizFlow Platform Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

        </div>
      </header>

      {/* Omnichannel Lead Integration Section (Light Theme) */}
      <section style={{ padding: '120px 48px', background: '#ffffff', color: '#0f172a', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center', marginBottom: '80px' }}>
            <div style={{ flex: '1 1 500px' }}>
               <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-1.5px', color: '#0f172a' }}>Omnichannel Lead Engine</h2>
               <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, marginBottom: '32px' }}>
                  Stop entering data manually. BizFlow CRM automatically captures and centralizes leads from every major marketing channel into your unified Deals Pipeline in real-time.
               </p>
               <img src="/omnichannel.png" alt="Omnichannel Integrations" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9' }} />
            </div>

            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>💬</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px', color: '#0f172a' }}>WhatsApp Integration</h3>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.5 }}>
                  Full support for both <strong>Official Meta API</strong> and <strong>Unofficial Webhooks</strong>. Instantly capture leads when a customer messages your business number.
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>📱</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px', color: '#0f172a' }}>Social Ads API</h3>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.5 }}>
                  Directly integrate with <strong>Facebook Lead Ads</strong> and <strong>Google Ads</strong>. The moment a user submits a form, they appear in your Pipeline.
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>📞</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px', color: '#0f172a' }}>Cloud Telephony</h3>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.5 }}>
                  Seamless integration with <strong>Exotel</strong> and <strong>Tata Tele Business</strong>. Automatically log incoming calls and generate leads from missed calls.
                </p>
              </div>

            </div>
          </div>

          {/* Lead Flow Diagram */}
          <div style={{ background: '#f8fafc', padding: '48px', borderRadius: '24px', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: '#0f172a' }}>How Your Leads Flow Autonomously</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '16px', color: '#475569', fontWeight: 700 }}>
              <div style={{ padding: '12px 24px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px' }}>Customer Clicks Facebook Ad</div>
              <span>➔</span>
              <div style={{ padding: '12px 24px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px' }}>Webhook Fires to BizFlow</div>
              <span>➔</span>
              <div style={{ padding: '12px 24px', background: '#4f46e5', color: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(79,70,229,0.4)' }}>Instant Lead in Pipeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section style={{ padding: '120px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-1.5px' }}>Built for operational excellence.</h2>
          <p style={{ fontSize: '20px', color: '#64748b' }}>Everything you need to close deals, completely decoupled from expensive legacy software.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          
          <div style={{ background: '#ffffff', padding: '0', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
            <img src="/kanban.png" alt="Kanban Pipeline" style={{ width: '100%', height: '240px', objectFit: 'cover', borderBottom: '1px solid #f1f5f9' }} />
            <div style={{ padding: '40px' }}>
              <div style={{ width: '48px', height: '48px', background: '#eef2ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#4f46e5', fontSize: '24px' }}>📊</div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>Visual Pipeline</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '16px' }}>Track your deals through a beautiful Kanban board. Drag and drop leads from Qualification to Closed Won effortlessly.</p>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '0', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
            <img src="/quotation.png" alt="1-Click Quotations" style={{ width: '100%', height: '240px', objectFit: 'cover', borderBottom: '1px solid #f1f5f9' }} />
            <div style={{ padding: '40px' }}>
              <div style={{ width: '48px', height: '48px', background: '#f0fdf4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#16a34a', fontSize: '24px' }}>📝</div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>1-Click Quotations</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '16px' }}>Generate professional, branded quotations instantly. Select a customer, add line items, and BizFlow calculates the totals automatically.</p>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '0', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
            <img src="/invoice.png" alt="GST Invoices" style={{ width: '100%', height: '240px', objectFit: 'cover', borderBottom: '1px solid #f1f5f9' }} />
            <div style={{ padding: '40px' }}>
              <div style={{ width: '48px', height: '48px', background: '#fffbeb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#d97706', fontSize: '24px' }}>💰</div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>Advanced GST Invoicing</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '16px' }}>Never calculate 18% IGST manually again. Our advanced invoicing engine handles complex Indian tax structures securely.</p>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '0', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
            <img src="/security.png" alt="Multi-Site Security" style={{ width: '100%', height: '240px', objectFit: 'cover', borderBottom: '1px solid #f1f5f9' }} />
            <div style={{ padding: '40px' }}>
              <div style={{ width: '48px', height: '48px', background: '#faf5ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#9333ea', fontSize: '24px' }}>🔒</div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>Enterprise Multi-Site</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '16px' }}>Your data is physically isolated. Every single customer gets their own secure, physically separated Frappe Cloud database.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '120px 48px', background: '#4f46e5', color: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px', letterSpacing: '-1.5px' }}>Ready to skyrocket your revenue?</h2>
        <p style={{ fontSize: '22px', color: '#e0e7ff', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px auto', lineHeight: 1.5 }}>
          Join the elite group of fast-growing companies that use BizFlow to automate lead capture and close deals faster.
        </p>
        <Link href="/signup" style={{ background: '#ffffff', color: '#4f46e5', padding: '20px 48px', borderRadius: '16px', fontSize: '20px', fontWeight: 800, textDecoration: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)' }}>
          Start Your Free Trial Now
        </Link>
      </section>

      {/* Floating WhatsApp Widget */}
      <a href="https://wa.me/919811920503" target="_blank" rel="noreferrer" style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        background: '#25D366',
        color: '#ffffff',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
        transition: 'transform 0.2s',
        textDecoration: 'none',
        fontSize: '36px'
      }} title="Chat with us on WhatsApp">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.927 3.149.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.77zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.099.824z"></path>
        </svg>
      </a>

    </div>
  );
}
