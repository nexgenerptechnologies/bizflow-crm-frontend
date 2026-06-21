"use client";

import { useState } from "react";
import { createInvoiceAction } from "@/app/actions";

export default function InvoiceList({ initialInvoices, availableItems, availableQuotations }: { initialInvoices: any[], availableItems: any[], availableQuotations: any[] }) {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([{ item_code: "", qty: 1, rate: 0, igst_perc: 18 }]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleItemChange = (index: number, field: string, value: any) => {
    const newItems = [...items];
    (newItems[index] as any)[field] = value;
    if (field === "item_code") {
      const found = availableItems.find(i => i.item_code === value);
      if (found) newItems[index].rate = found.selling_price || 0;
    }
    setItems(newItems);
  };

  const addItemRow = () => setItems([...items, { item_code: "", qty: 1, rate: 0, igst_perc: 18 }]);
  
  const calculateTotals = () => {
    let subtotal = 0;
    let totalTaxes = 0;
    items.forEach(item => {
      const amt = item.qty * item.rate;
      subtotal += amt;
      totalTaxes += (amt * item.igst_perc) / 100;
    });
    return { subtotal, totalTaxes, grandTotal: subtotal + totalTaxes };
  };

  const totals = calculateTotals();

  return (
    <>
      <header className="page-header">
        <h1 className="page-title">GST Invoices</h1>
        <button className="btn-primary" onClick={() => setShowModal(true)}>Create Invoice</button>
      </header>

      <div className="table-container">
        <table className="premium-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total Tax</th>
              <th>Grand Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {initialInvoices.map((inv: any) => (
              <tr key={inv.name}>
                <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>{inv.name}</td>
                <td style={{ fontWeight: '500' }}>{inv.customer_name}</td>
                <td>{inv.date}</td>
                <td>Rs. {inv.total_taxes?.toLocaleString() || 0}</td>
                <td style={{ fontWeight: '600' }}>Rs. {inv.grand_total?.toLocaleString()}</td>
                <td>
                  <span style={{
                    background: inv.payment_status === 'Paid' ? 'var(--success-bg)' : '#fef3c7',
                    color: inv.payment_status === 'Paid' ? 'var(--success-text)' : '#b45309',
                    padding: '4px 10px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600
                  }}>
                    {inv.payment_status}
                  </span>
                </td>
              </tr>
            ))}
            {initialInvoices.length === 0 && (
              <tr><td colSpan={6} style={{padding: '32px', textAlign: 'center', color: 'var(--text-muted)'}}>No invoices found. Create one!</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content large">
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>New GST Invoice</h2>
            
            {errorMsg && <div style={{color: 'var(--danger-text)', background: 'var(--danger-bg)', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', fontWeight: 500}}>{errorMsg}</div>}

            <form action={async (formData) => {
              setErrorMsg(""); setIsSubmitting(true);
              try {
                  const payload = {
                    customer_name: formData.get("customer_name"),
                    gstin: formData.get("gstin"),
                    date: formData.get("date"),
                    quotation_ref: formData.get("quotation_ref"),
                    total_taxes: totals.totalTaxes,
                    grand_total: totals.grandTotal,
                    items: items.map(i => ({ 
                      item_code: i.item_code, 
                      qty: i.qty, 
                      rate: i.rate, 
                      igst_perc: i.igst_perc,
                      amount: i.qty * i.rate 
                    }))
                  };
                  await createInvoiceAction(payload);
                  setShowModal(false);
              } catch(err: any) {
                  setErrorMsg(err.message || "Failed to create Invoice.");
              } finally {
                  setIsSubmitting(false);
              }
            }}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px'}}>
                <div className="form-group" style={{marginBottom: 0}}>
                  <label className="form-label">Customer Name</label>
                  <input name="customer_name" required className="form-input" placeholder="e.g. Acme Corp" />
                </div>
                <div className="form-group" style={{marginBottom: 0}}>
                  <label className="form-label">Invoice Date</label>
                  <input name="date" type="date" required className="form-input" />
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px'}}>
                <div className="form-group" style={{marginBottom: 0}}>
                  <label className="form-label">Customer GSTIN (Optional)</label>
                  <input name="gstin" className="form-input" placeholder="22AAAAA0000A1Z5" />
                </div>
                <div className="form-group" style={{marginBottom: 0}}>
                  <label className="form-label">Link Quotation (Optional)</label>
                  <select name="quotation_ref" className="form-input">
                    <option value="">None</option>
                    {availableQuotations.map(q => <option key={q.name} value={q.name}>{q.name} ({q.customer_name})</option>)}
                  </select>
                </div>
              </div>

              <div style={{marginBottom: '24px'}}>
                <h3 style={{fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '12px'}}>Invoice Items</h3>
                {items.map((item, index) => (
                  <div key={index} style={{display: 'flex', gap: '12px', marginBottom: '12px'}}>
                    <select className="form-input" style={{flex: 2}} value={item.item_code} onChange={e => handleItemChange(index, 'item_code', e.target.value)} required>
                      <option value="">Select Item...</option>
                      {availableItems.map(ai => <option key={ai.name} value={ai.item_code}>{ai.item_name}</option>)}
                    </select>
                    <input type="number" className="form-input" style={{flex: 1}} placeholder="Qty" value={item.qty} onChange={e => handleItemChange(index, 'qty', parseFloat(e.target.value) || 0)} required />
                    <input type="number" className="form-input" style={{flex: 1}} placeholder="Rate" value={item.rate} onChange={e => handleItemChange(index, 'rate', parseFloat(e.target.value) || 0)} required />
                    <input type="number" className="form-input" style={{flex: 1}} placeholder="IGST %" value={item.igst_perc} onChange={e => handleItemChange(index, 'igst_perc', parseFloat(e.target.value) || 0)} />
                  </div>
                ))}
                <button type="button" onClick={addItemRow} style={{fontSize: '13px', color: 'var(--accent-color)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500}}>+ Add Item</button>
              </div>

              <div style={{background: '#f8fafc', padding: '16px', borderRadius: '8px', marginBottom: '32px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--text-muted)'}}>
                  <span>Subtotal:</span>
                  <span>Rs. {totals.subtotal.toLocaleString()}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: 'var(--text-muted)'}}>
                  <span>Total IGST (Taxes):</span>
                  <span>Rs. {totals.totalTaxes.toLocaleString()}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '700', color: 'var(--text-main)', borderTop: '1px solid var(--border-color)', paddingTop: '12px'}}>
                  <span>Grand Total:</span>
                  <span>Rs. {totals.grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end'}}>
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary" disabled={isSubmitting}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={isSubmitting}>{isSubmitting ? "Generating..." : "Generate GST Invoice"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


