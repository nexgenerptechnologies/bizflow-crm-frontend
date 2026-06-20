export default function Home() {
  const pipelineStages = [
    { id: 'leads', title: 'New Leads', amount: 'Rs. 0' },
    { id: 'contacted', title: 'Contacted', amount: 'Rs. 1,20,000' },
    { id: 'proposal', title: 'Proposal Sent', amount: 'Rs. 4,50,000' },
    { id: 'won', title: 'Closed Won', amount: 'Rs. 8,90,000' },
  ];

  const dummyDeals = [
    { id: 1, title: 'Website Redesign', company: 'Acme Corp', amount: 'Rs. 1,20,000', stage: 'contacted' },
    { id: 2, title: 'Marketing Retainer', company: 'TechNova', amount: 'Rs. 4,50,000', stage: 'proposal' },
    { id: 3, title: 'CRM Setup', company: 'GrowthX', amount: 'Rs. 8,90,000', stage: 'won' },
  ];

  return (
    <>
      <header className="header">
        <h1 className="page-title">Deals Pipeline ✨</h1>
        <button className="btn-primary">+ New Deal</button>
      </header>
      <div className="kanban-board">
        {pipelineStages.map(stage => (
          <div key={stage.id} className="kanban-column">
            <div className="column-header">
              <span className="column-title">{stage.title}</span>
              <span className="column-badge">{stage.amount}</span>
            </div>
            
            {dummyDeals.filter(d => d.stage === stage.id).map(deal => (
              <div key={deal.id} className="glass-panel deal-card">
                <div className="deal-title">{deal.title}</div>
                <div className="deal-company">🏢 {deal.company}</div>
                <div className="deal-footer">
                  <span className="deal-amount">{deal.amount}</span>
                  <span style={{color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600'}}>Today</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
