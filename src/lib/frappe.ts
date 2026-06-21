import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getFrappeUrl() {
  const headersList = await headers();
  const host = headersList.get('host') || ''; 

  let tenant = 'nexgenerp'; // fallback
  
  if (host.includes('nexgenerp.in')) {
     tenant = host.split('.')[0]; 
  } else if (host.includes('localhost') || host.includes('127.0.0.1')) {
     const parts = host.split('.');
     if (parts.length > 1 && parts[0] !== 'localhost' && parts[0] !== '127') {
         tenant = parts[0]; 
     }
  }

  // Assuming Frappe Cloud sites are named [tenant].frappe.cloud
  // If the root is nexgenerp, fallback to the main site
  if (tenant === 'nexgenerp' || tenant === 'www') {
      return `https://nexgenerp.frappe.cloud`;
  }

  // Example dynamic mapping: user1 -> https://user1.frappe.cloud
  return `https://${tenant}.frappe.cloud`;
}

export async function fetchFrappe(endpoint: string, options: RequestInit = {}) {
  const baseUrl = await getFrappeUrl();
  const url = `${baseUrl}/api/resource/${endpoint}`;
  
  const sid = (await cookies()).get('sid')?.value;
  if (!sid) throw new Error('Unauthorized');

  const res = await fetch(url, {
    ...options,
    headers: {
      "Cookie": `sid=${sid}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...options.headers,
    },
    cache: 'no-store' 
  });

  if (res.status === 401 || res.status === 403) throw new Error('Unauthorized');

  if (!res.ok) {
    const text = await res.text();
    console.error(`Frappe API Error (${endpoint}):`, text);
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}

export async function createFrappe(doctype: string, payload: any) {
  const baseUrl = await getFrappeUrl();
  const url = `${baseUrl}/api/resource/${doctype}`;
  
  const sid = (await cookies()).get('sid')?.value;
  if (!sid) throw new Error('Unauthorized');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      "Cookie": `sid=${sid}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload)
  });

  if (res.status === 401 || res.status === 403) throw new Error('Unauthorized');

  if (!res.ok) {
    const text = await res.text();
    console.error(`Frappe POST Error (${doctype}):`, text);
    throw new Error(`Failed to create ${doctype}`);
  }

  return res.json();
}
