export default function Invoices() {
  return (
    <>
      <header className="header">
        <h1 className="page-title">GST Invoices 🧾</h1>
        <button className="btn-primary">+ Generate Invoice</button>
      </header>
      
      <div style={{ padding: '0 40px 40px 40px' }}>
        <div className="glass-panel" style={{ padding: '40px', background: 'white' }}>
          <div style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '32px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '28px', color: '#6366f1', marginBottom: '8px' }}>TAX INVOICE</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Invoice #: INV-2026-001</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Date: <strong style={{color: '#1e293b'}}>Oct 24, 2026</strong></p>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px' }}>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', width: '45%' }}>
              <h4 style={{ color: '#ec4899', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Billed To</h4>
              <p style={{ fontWeight: '800', fontSize: '20px', marginBottom: '4px' }}>Acme Corp</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500' }}>GSTIN: 27AADCB2230M1Z2</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', width: '45%', textAlign: 'right' }}>
              <h4 style={{ color: '#ec4899', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Payable To</h4>
              <p style={{ fontWeight: '800', fontSize: '20px', marginBottom: '4px' }}>BizFlow SaaS Pvt Ltd</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500' }}>GSTIN: 27AAACZ1122K1Z9</p>
            </div>
          </div>
          
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#f8fafc' }}>
                <tr style={{ color: '#475569', fontSize: '14px' }}>
                  <th style={{ padding: '16px 24px', fontWeight: '600' }}>Item Description</th>
                  <th style={{ padding: '16px 24px', fontWeight: '600' }}>HSN/SAC</th>
                  <th style={{ padding: '16px 24px', fontWeight: '600' }}>Qty</th>
                  <th style={{ padding: '16px 24px', fontWeight: '600' }}>Rate</th>
                  <th style={{ padding: '16px 24px', fontWeight: '600' }}>GST</th>
                  <th style={{ padding: '16px 24px', fontWeight: '600', textAlign: 'right' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '20px 24px', fontWeight: '500' }}>SaaS Subscription (Annual)</td>
                  <td style={{ padding: '20px 24px', color: 'var(--text-muted)' }}>9983</td>
                  <td style={{ padding: '20px 24px', fontWeight: '500' }}>1</td>
                  <td style={{ padding: '20px 24px', fontWeight: '500' }}>Rs. 1,20,000</td>
                  <td style={{ padding: '20px 24px', color: 'var(--text-muted)' }}>18%</td>
                  <td style={{ padding: '20px 24px', fontWeight: '700', textAlign: 'right' }}>Rs. 1,20,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px' }}>
            <div style={{ width: '350px', background: '#f8fafc', padding: '24px', borderRadius: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: '500' }}>
                <span style={{ color: 'var(--text-muted)' }}>Subtotal:</span>
                <span>Rs. 1,20,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: '500' }}>
                <span style={{ color: 'var(--text-muted)' }}>CGST (9%):</span>
                <span>Rs. 10,800</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontWeight: '500' }}>
                <span style={{ color: 'var(--text-muted)' }}>SGST (9%):</span>
                <span>Rs. 10,800</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px dashed #cbd5e1', paddingTop: '20px', fontWeight: '800', fontSize: '22px' }}>
                <span>Grand Total:</span>
                <span style={{ color: '#10b981' }}>Rs. 1,41,600</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
