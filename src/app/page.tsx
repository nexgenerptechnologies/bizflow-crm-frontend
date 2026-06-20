export default function Home() {
  const pipelineStages = [
    { id: 'leads', title: 'New Leads', amount: '?0' },
    { id: 'contacted', title: 'Contacted', amount: '?120,000' },
    { id: 'proposal', title: 'Proposal Sent', amount: '?450,000' },
    { id: 'won', title: 'Closed Won', amount: '?890,000' },
  ];

  const dummyDeals = [
    { id: 1, title: 'Website Redesign', company: 'Acme Corp', amount: '?120,000', stage: 'contacted' },
    { id: 2, title: 'Marketing Retainer', company: 'TechNova', amount: '?450,000', stage: 'proposal' },
    { id: 3, title: 'CRM Setup', company: 'GrowthX', amount: '?890,000', stage: 'won' },
  ];

  return (
    <div className="kanban-board">
      {pipelineStages.map(stage => (
        <div key={stage.id} className="kanban-column">
          <div className="column-header">
            <span className="column-title">{stage.title}</span>
            <span style={{color: 'var(--text-muted)', fontSize: '13px'}}>{stage.amount}</span>
          </div>
          
          {dummyDeals.filter(d => d.stage === stage.id).map(deal => (
            <div key={deal.id} className="glass-panel deal-card">
              <div className="deal-title">{deal.title}</div>
              <div className="deal-company">{deal.company}</div>
              <div className="deal-footer">
                <span className="deal-amount">{deal.amount}</span>
                <span style={{color: 'var(--text-muted)', fontSize: '12px'}}>Today</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
