"use client";

import { useState } from "react";

const INITIAL_DEALS = [
  { id: 1, name: "Acme Corp Deal", amount: 15000, stage: "Lead" },
  { id: 2, name: "TechNova Upgrade", amount: 25000, stage: "Qualified" },
  { id: 3, name: "Global Industries CRM", amount: 120000, stage: "Proposal" },
  { id: 4, name: "Stark Enterprises", amount: 500000, stage: "Won" }
];

const STAGES = ["Lead", "Qualified", "Proposal", "Won"];

export default function PipelinePage() {
  const [deals, setDeals] = useState(INITIAL_DEALS);
  const [draggedDeal, setDraggedDeal] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const handleDragStart = (e: React.DragEvent, deal: any) => {
    setDraggedDeal(deal);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, stage: string) => {
    e.preventDefault();
    if (!draggedDeal) return;
    
    setDeals(deals.map(d => d.id === draggedDeal.id ? { ...d, stage } : d));
    setDraggedDeal(null);
  };

  const handleCreateDeal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newDeal = {
      id: Date.now(),
      name: formData.get("name") as string,
      amount: parseInt(formData.get("amount") as string) || 0,
      stage: "Lead"
    };
    setDeals([...deals, newDeal]);
    setShowModal(false);
  };

  return (
    <div className="page-container" style={{ padding: '32px' }}>
      <div className="page-header" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title" style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>Sales Pipeline</h1>
          <p style={{ color: '#64748b', marginTop: '4px' }}>Drag and drop deals across stages.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="btn-primary" style={{ padding: '10px 20px', borderRadius: '8px', background: '#4f46e5', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>+ New Deal</button>
      </div>

      <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '24px', minHeight: '600px' }}>
        {STAGES.map(stage => (
          <div 
            key={stage}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, stage)}
            style={{ 
              flex: '0 0 300px', 
              background: '#f8fafc', 
              borderRadius: '12px', 
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', background: '#f1f5f9', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {stage} <span style={{ background: '#cbd5e1', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', marginLeft: '8px', color: '#0f172a' }}>{deals.filter(d => d.stage === stage).length}</span>
              </h3>
            </div>
            
            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {deals.filter(d => d.stage === stage).map(deal => (
                <div 
                  key={deal.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, deal)}
                  style={{ 
                    background: '#ffffff', 
                    padding: '16px', 
                    borderRadius: '8px', 
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
                    border: '1px solid #e2e8f0',
                    cursor: 'grab',
                    transition: 'transform 0.1s'
                  }}
                >
                  <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '8px', fontSize: '15px' }}>{deal.name}</h4>
                  <div style={{ color: '#16a34a', fontWeight: 600, fontSize: '14px' }}>
                    ₹{deal.amount.toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div className="modal-content" style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', width: '100%', maxWidth: '400px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '24px', color: '#0f172a' }}>Create New Deal</h2>
            <form onSubmit={handleCreateDeal}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#334155' }}>Deal Name</label>
                <input name="name" required style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#334155' }}>Amount (₹)</label>
                <input name="amount" type="number" required style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: '10px 16px', background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '10px 16px', background: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Create Deal</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
