"use client";

import { useState, useEffect } from "react";

const INTEGRATIONS = [
  { id: "wa_meta", name: "WhatsApp Meta Cloud API", icon: "💬", color: "#25D366", fields: ["Phone Number ID", "Access Token"] },
  { id: "wa_unofficial", name: "WhatsApp Webhook (Unofficial)", icon: "📱", color: "#128C7E", fields: ["Instance ID", "API Key"] },
  { id: "fb_ads", name: "Facebook Lead Ads", icon: "📘", color: "#1877F2", fields: ["Page ID", "App Secret"] },
  { id: "google_ads", name: "Google Ads Webhook", icon: "🔍", color: "#EA4335", fields: ["Developer Token", "Webhook URL"] },
  { id: "exotel", name: "Exotel Cloud Telephony", icon: "📞", color: "#6366F1", fields: ["Exotel SID", "API Key", "API Token"] },
  { id: "tata_tele", name: "Tata Tele Business", icon: "☎️", color: "#0EA5E9", fields: ["Auth Key", "Sender ID"] },
  { id: "indiamart", name: "IndiaMart Leads", icon: "🛒", color: "#F59E0B", fields: ["Glusr_usr Key"] },
  { id: "website", name: "Custom Website Webhook", icon: "🌐", color: "#8B5CF6", fields: ["Webhook Secret Key"] }
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("integrations");
  const [formData, setFormData] = useState<any>({});
  const [isSaving, setIsSaving] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const handleInputChange = (integrationId: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [integrationId]: {
        ...(prev[integrationId] || {}),
        [field]: value
      }
    }));
  };

  const saveSettings = async () => {
    setIsSaving(true);
    try {
      for (const [integrationId, data] of Object.entries(formData)) {
        await fetch('/api/settings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ integrationId, formData: data })
        });
      }
      setToastMsg("Integrations Successfully Saved to Frappe Backend!");
      setTimeout(() => setToastMsg(""), 4000);
    } catch (error) {
      console.error(error);
      setToastMsg("Error saving settings.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="page-container" style={{ padding: '32px' }}>
      <div className="page-header" style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title" style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>Workspace Settings</h1>
          <p style={{ color: '#64748b', marginTop: '4px' }}>Configure your automated omnichannel integrations.</p>
        </div>
        <button 
          onClick={saveSettings} 
          disabled={isSaving}
          className="btn-primary" 
          style={{ padding: '10px 20px', borderRadius: '8px', background: isSaving ? '#94a3b8' : '#4f46e5', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}
        >
          {isSaving ? "Saving to Backend..." : "Save Settings"}
        </button>
      </div>

      {toastMsg && (
        <div style={{ background: '#10b981', color: 'white', padding: '16px 24px', borderRadius: '8px', marginBottom: '24px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {toastMsg}
          <button onClick={() => setToastMsg("")} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '18px' }}>×</button>
        </div>
      )}

      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ flex: '0 0 250px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => setActiveTab("general")} style={{ textAlign: 'left', padding: '12px 16px', borderRadius: '8px', border: 'none', background: activeTab === "general" ? '#eef2ff' : 'transparent', color: activeTab === "general" ? '#4f46e5' : '#475569', fontWeight: activeTab === "general" ? 700 : 500, cursor: 'pointer' }}>General Profile</button>
          <button onClick={() => setActiveTab("integrations")} style={{ textAlign: 'left', padding: '12px 16px', borderRadius: '8px', border: 'none', background: activeTab === "integrations" ? '#eef2ff' : 'transparent', color: activeTab === "integrations" ? '#4f46e5' : '#475569', fontWeight: activeTab === "integrations" ? 700 : 500, cursor: 'pointer' }}>Omnichannel Integrations</button>
          <button onClick={() => setActiveTab("billing")} style={{ textAlign: 'left', padding: '12px 16px', borderRadius: '8px', border: 'none', background: activeTab === "billing" ? '#eef2ff' : 'transparent', color: activeTab === "billing" ? '#4f46e5' : '#475569', fontWeight: activeTab === "billing" ? 700 : 500, cursor: 'pointer' }}>Billing & Usage</button>
        </div>

        <div style={{ flex: 1, background: '#ffffff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          {activeTab === "integrations" && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '24px', color: '#0f172a' }}>Connected Platforms</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                {INTEGRATIONS.map(integration => (
                  <div key={integration.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', background: '#f8fafc' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <div style={{ width: '40px', height: '40px', background: `${integration.color}20`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{integration.icon}</div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{integration.name}</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {integration.fields.map(field => (
                        <div key={field}>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>{field}</label>
                          <input 
                            type="text" 
                            placeholder={`Enter ${field}`} 
                            value={formData[integration.id]?.[field] || ""}
                            onChange={(e) => handleInputChange(integration.id, field, e.target.value)}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '14px' }} 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== "integrations" && (
            <div style={{ textAlign: 'center', padding: '64px', color: '#64748b' }}>
              Select Omnichannel Integrations to configure API Webhooks.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
