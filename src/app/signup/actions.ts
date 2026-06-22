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
    
    // We redirect them to the frontend login page with a success message
    const redirectUrl = `/login?tenant=${subdomain}&success=true`;

    console.log(`[Mock API] Simulating database provisioning for: ${subdomain}.nexgenerp.in`);
    
    // Simulate Frappe Cloud database creation time (3 seconds for mock)
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Return success without actually hitting Frappe Cloud
    return { success: true, redirectUrl };
  } catch (err: any) {
    console.error("Fatal Action Error:", err);
    return { error: `A fatal error occurred on the server: ${err.message || 'Unknown error'}` };
  }
}
