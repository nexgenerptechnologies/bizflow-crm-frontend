export default function Invoices() {
  return (
    <>
      <header className="header">
        <h1 className="page-title">GST Invoices</h1>
        <button className="btn-primary">Create Invoice</button>
      </header>
      
      <div style={{ padding: '32px' }}>
        <div className="invoice-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px' }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>TAX INVOICE</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>INV-2026-001</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Issue Date</p>
              <p style={{ fontWeight: '500', color: 'var(--text-main)' }}>Oct 24, 2026</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '24px 0' }}>
            <div style={{ width: '45%' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '600' }}>Billed To</p>
              <p style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>Acme Corp</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>GSTIN: 27AADCB2230M1Z2</p>
            </div>
            <div style={{ width: '45%', textAlign: 'right' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '600' }}>Payable To</p>
              <p style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>BizFlow SaaS Pvt Ltd</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>GSTIN: 27AAACZ1122K1Z9</p>
            </div>
          </div>
          
          <table className="invoice-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Description</th>
                <th style={{ textAlign: 'left' }}>HSN/SAC</th>
                <th style={{ textAlign: 'right' }}>Qty</th>
                <th style={{ textAlign: 'right' }}>Rate</th>
                <th style={{ textAlign: 'right' }}>GST</th>
                <th style={{ textAlign: 'right' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p style={{ fontWeight: '500' }}>SaaS Subscription (Annual)</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>Enterprise tier, 12 months</p>
                </td>
                <td style={{ color: 'var(--text-muted)' }}>9983</td>
                <td style={{ textAlign: 'right' }}>1</td>
                <td style={{ textAlign: 'right' }}>Rs. 1,20,000</td>
                <td style={{ textAlign: 'right', color: 'var(--text-muted)' }}>18%</td>
                <td style={{ textAlign: 'right', fontWeight: '500' }}>Rs. 1,20,000</td>
              </tr>
            </tbody>
          </table>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
            <div style={{ width: '320px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: '14px', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                <span>Rs. 1,20,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: '14px', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ color: 'var(--text-muted)' }}>CGST (9%)</span>
                <span>Rs. 10,800</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: '14px', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ color: 'var(--text-muted)' }}>SGST (9%)</span>
                <span>Rs. 10,800</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', fontWeight: '600', fontSize: '18px' }}>
                <span>Total Due</span>
                <span style={{ color: 'var(--text-main)' }}>Rs. 1,41,600</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}