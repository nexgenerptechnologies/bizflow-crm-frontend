"use client";

import { useState } from "react";
import { createQuotationAction } from "@/app/actions";

export default function QuotationList({ initialQuotations, availableItems }: { initialQuotations: any[], availableItems: any[] }) {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([{ item_code: "", qty: 1, rate: 0 }]);
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

  const addItemRow = () => setItems([...items, { item_code: "", qty: 1, rate: 0 }]);
  const calculateTotal = () => items.reduce((sum, item) => sum + (item.qty * item.rate), 0);

  return (
    <>
      <header className="page-header">
        <h1 className="page-title">Quotations</h1>
        <button className="btn-primary" onClick={() => setShowModal(true)}>Create Quotation</button>
      </header>

      <div className="table-container">
        <table className="premium-table">
          <thead>
            <tr>
              <th>Quotation #</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {initialQuotations.map((q: any) => (
              <tr key={q.name}>
                <td style={{ fontWeight: '600', color: 'var(--accent-color)' }}>{q.name}</td>
                <td style={{ fontWeight: '500' }}>{q.customer_name}</td>
                <td>{q.date}</td>
                <td style={{ fontWeight: '600' }}>Rs. {q.total_amount?.toLocaleString()}</td>
              </tr>
            ))}
            {initialQuotations.length === 0 && (
              <tr><td colSpan={4} style={{padding: '32px', textAlign: 'center', color: 'var(--text-muted)'}}>No quotations found. Create one!</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content large">
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>New Quotation</h2>
            
            {errorMsg && <div style={{color: 'var(--danger-text)', background: 'var(--danger-bg)', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', fontWeight: 500}}>{errorMsg}</div>}

            <form action={async (formData) => {
              setErrorMsg(""); setIsSubmitting(true);
              try {
                  const payload = {
                    customer_name: formData.get("customer_name"),
                    date: formData.get("date"),
                    total_amount: calculateTotal(),
                    items: items.map(i => ({ item_code: i.item_code, qty: i.qty, rate: i.rate, amount: i.qty * i.rate }))
                  };
                  await createQuotationAction(payload);
                  setShowModal(false);
              } catch(err: any) {
                  setErrorMsg(err.message || "Failed to create Quotation.");
              } finally {
                  setIsSubmitting(false);
              }
            }}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px'}}>
                <div className="form-group" style={{marginBottom: 0}}>
                  <label className="form-label">Customer Name</label>
                  <input name="customer_name" required className="form-input" placeholder="e.g. Acme Corp" />
                </div>
                <div className="form-group" style={{marginBottom: 0}}>
                  <label className="form-label">Date</label>
                  <input name="date" type="date" required className="form-input" />
                </div>
              </div>

              <div style={{marginBottom: '24px'}}>
                <h3 style={{fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '12px'}}>Items</h3>
                {items.map((item, index) => (
                  <div key={index} style={{display: 'flex', gap: '16px', marginBottom: '12px'}}>
                    <select className="form-input" style={{flex: 2}} value={item.item_code} onChange={e => handleItemChange(index, 'item_code', e.target.value)} required>
                      <option value="">Select Item...</option>
                      {availableItems.map(ai => <option key={ai.name} value={ai.item_code}>{ai.item_name} (Rs. {ai.selling_price})</option>)}
                    </select>
                    <input type="number" className="form-input" style={{flex: 1}} placeholder="Qty" value={item.qty} onChange={e => handleItemChange(index, 'qty', parseFloat(e.target.value) || 0)} required />
                    <input type="number" className="form-input" style={{flex: 1}} placeholder="Rate" value={item.rate} onChange={e => handleItemChange(index, 'rate', parseFloat(e.target.value) || 0)} required />
                  </div>
                ))}
                <button type="button" onClick={addItemRow} style={{fontSize: '13px', color: 'var(--accent-color)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500}}>+ Add Row</button>
              </div>

              <div style={{marginBottom: '32px', textAlign: 'right', fontSize: '18px', fontWeight: '700', color: 'var(--text-main)'}}>
                Total: Rs. {calculateTotal().toLocaleString()}
              </div>

              <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end'}}>
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary" disabled={isSubmitting}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Quotation"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


