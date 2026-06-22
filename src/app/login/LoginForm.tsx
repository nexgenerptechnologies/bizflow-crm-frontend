"use client";

import { useActionState, useState } from "react";
import { loginAction } from "../actions";

const initialState = { error: null as string | null };

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction}>
      {state?.error && (
        <div style={{ color: '#ef4444', background: '#fef2f2', border: '1px solid #fca5a5', padding: '16px', borderRadius: '12px', marginBottom: '24px', fontSize: '14px', fontWeight: 500 }}>
          {state.error}
        </div>
      )}
      
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#334155' }}>Email or Username</label>
        <input 
          name="usr" 
          type="text" 
          className="form-input" 
          placeholder="admin@example.com" 
          required 
          style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none', transition: 'border-color 0.2s' }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '32px' }}>
        <label className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#334155' }}>Password</label>
        <input 
          name="pwd" 
          type="password" 
          className="form-input" 
          placeholder="••••••••" 
          required 
          style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none', transition: 'border-color 0.2s' }}
        />
      </div>

      <button 
        type="submit" 
        className="btn-primary" 
        disabled={isPending}
        style={{ width: '100%', padding: '16px', borderRadius: '12px', background: isPending ? '#94a3b8' : '#0f172a', color: '#ffffff', fontSize: '16px', fontWeight: 700, border: 'none', cursor: isPending ? 'not-allowed' : 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
      >
        {isPending ? 'Authenticating...' : 'Sign In'}
      </button>
    </form>
  );
}
