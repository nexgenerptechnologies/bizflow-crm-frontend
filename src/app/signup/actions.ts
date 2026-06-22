"use server";

export async function createTenantSiteAction(formData: FormData) {
  try {
    const subdomain = formData.get("subdomain") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!subdomain || !email || !password) {
      return { error: "All fields are required." };
    }

    const isLocal = process.env?.NODE_ENV !== 'production';
    const baseDomain = isLocal ? 'localhost:3000' : 'nexgenerp.in';
    const protocol = isLocal ? 'http' : 'https';
    const redirectUrl = `${protocol}://${subdomain}.${baseDomain}/login`;

    const token = process.env?.FRAPPE_CLOUD_API_TOKEN;
    if (!token) {
      console.error("Missing FRAPPE_CLOUD_API_TOKEN environment variable.");
      return { error: "Server Configuration Error: Missing API Token in Cloudflare." };
    }

    console.log(`[Frappe Cloud API] Provisioning new database for: ${subdomain}.nexgenerp.in on bench: nexgenerp`);
    
    // Direct URL to avoid 308 Redirects which strip the Authorization header
    const fcResponse = await fetch('https://cloud.frappe.io/api/method/press.api.site.new', {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${subdomain}.nexgenerp.in`,
        bench: 'nexgenerp'
      })
    });

    const resultText = await fcResponse.text();
    console.log("Frappe Cloud Response:", resultText);

    if (!fcResponse.ok) {
      return { error: `Failed to provision database: ${fcResponse.statusText} - ${resultText}` };
    }

    return { success: true, redirectUrl };
  } catch (err: any) {
    console.error("Fatal Action Error:", err);
    return { error: `A fatal error occurred on the server: ${err.message || 'Unknown error'}` };
  }
}
