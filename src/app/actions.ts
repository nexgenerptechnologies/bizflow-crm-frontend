"use server";

import { createFrappe, getFrappeUrl } from "@/lib/frappe";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createContactAction(formData: FormData) {
  const payload = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email_id: formData.get("email_id"),
    mobile_no: formData.get("mobile_no")
  };
  
  await createFrappe("Contact", payload);
  revalidatePath("/contacts");
}

export async function createQuotationAction(payload: any) {
  await createFrappe("BizFlow Quotation", payload);
  revalidatePath("/quotations");
}

export async function createInvoiceAction(payload: any) {
  await createFrappe("BizFlow GST Invoice", payload);
  revalidatePath("/invoices");
}

export async function loginAction(state: any, formData: FormData) {
  const usr = formData.get("usr");
  const pwd = formData.get("pwd");

  const baseUrl = await getFrappeUrl();
  const url = `${baseUrl}/api/method/login`;
  
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ usr, pwd })
  });

  if (!res.ok) {
    const text = await res.text();
    return { error: "Invalid credentials or Frappe server error." };
  }

  const setCookieHeader = res.headers.get("set-cookie");
  if (setCookieHeader) {
    // Parse the sid cookie
    const match = setCookieHeader.match(/sid=([^;]+)/);
    if (match && match[1]) {
      const sid = match[1];
      // Set the Next.js cookie
      (await cookies()).set('sid', sid, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
      });
      redirect("/pipeline");
      return;
    }
  }

  return { error: "Authentication failed. No session cookie received." };
}

export async function logoutAction() {
  (await cookies()).delete('sid');
  redirect("/login");
}

