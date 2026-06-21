"use client";

import { useState } from "react";
import { createContactAction } from "@/app/actions";

export default function ContactList({ initialContacts }: { initialContacts: any[] }) {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
      <header className="page-header">
        <h1 className="page-title">Contacts Database</h1>
        <button className="btn-primary" onClick={() => setShowModal(true)}>Add Contact</button>
      </header>

      <div className="table-container">
        <table className="premium-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {initialContacts.map((c: any) => (
              <tr key={c.name}>
                <td style={{ fontWeight: '600' }}>{c.first_name} {c.last_name}</td>
                <td>{c.email_id || '-'}</td>
                <td>{c.mobile_no || '-'}</td>
                <td style={{ color: 'var(--text-muted)' }}>{c.name}</td>
              </tr>
            ))}
            {initialContacts.length === 0 && (
              <tr><td colSpan={4} style={{padding: '32px', textAlign: 'center', color: 'var(--text-muted)'}}>No contacts found. Create one!</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ background: "#ffffff" }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>New Contact</h2>
            
            {errorMsg && <div style={{color: 'var(--danger-text)', background: 'var(--danger-bg)', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', fontWeight: 500}}>{errorMsg}</div>}

            <form action={async (formData) => {
              setErrorMsg(""); setIsSubmitting(true);
              try {
                  await createContactAction(formData);
                  setShowModal(false);
              } catch(err: any) {
                  setErrorMsg(err.message || "Failed to create Contact.");
              } finally {
                  setIsSubmitting(false);
              }
            }}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input name="first_name" required className="form-input" placeholder="John" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input name="last_name" className="form-input" placeholder="Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input name="email_id" type="email" className="form-input" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input name="mobile_no" className="form-input" placeholder="+1 234 567 890" />
              </div>

              <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '32px'}}>
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary" disabled={isSubmitting}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Contact"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


