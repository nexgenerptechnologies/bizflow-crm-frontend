export default function Invoices() {
  return (
    <div style={{ padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2>GST Invoices</h2>
        <button className="btn-primary">Generate New Invoice</button>
      </div>
      
      <div className="glass-panel" style={{ padding: '32px' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '24px', marginBottom: '24px' }}>
          <h3>TAX INVOICE</h3>
          <p style={{ color: 'var(--text-muted)' }}>Invoice #: INV-2026-001 | Date: Oct 24, 2026</p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div>
            <h4 style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Billed To:</h4>
            <p style={{ fontWeight: '600' }}>Acme Corp</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>GSTIN: 27AADCB2230M1Z2</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Payable To:</h4>
            <p style={{ fontWeight: '600' }}>BizFlow SaaS Pvt Ltd</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>GSTIN: 27AAACZ1122K1Z9</p>
          </div>
        </div>
        
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '12px 0' }}>Item Description</th>
              <th style={{ padding: '12px 0' }}>HSN/SAC</th>
              <th style={{ padding: '12px 0' }}>Qty</th>
              <th style={{ padding: '12px 0' }}>Rate</th>
              <th style={{ padding: '12px 0' }}>GST</th>
              <th style={{ padding: '12px 0', textAlign: 'right' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '16px 0' }}>SaaS Subscription (Annual)</td>
              <td style={{ padding: '16px 0' }}>9983</td>
              <td style={{ padding: '16px 0' }}>1</td>
              <td style={{ padding: '16px 0' }}>?120,000</td>
              <td style={{ padding: '16px 0' }}>18%</td>
              <td style={{ padding: '16px 0', textAlign: 'right' }}>?120,000</td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
          <div style={{ width: '300px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Subtotal:</span>
              <span>?120,000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>CGST (9%):</span>
              <span>?10,800</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: 'var(--text-muted)' }}>SGST (9%):</span>
              <span>?10,800</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '16px', fontWeight: 'bold', fontSize: '18px' }}>
              <span>Grand Total:</span>
              <span style={{ color: 'var(--success)' }}>?141,600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
