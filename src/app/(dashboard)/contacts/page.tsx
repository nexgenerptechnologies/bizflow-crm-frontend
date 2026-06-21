import { fetchFrappe } from "@/lib/frappe";
import ContactList from "./ContactList";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  let contacts = [];
  try {
    const res = await fetchFrappe('Contact?fields=["name","first_name","last_name","email_id","mobile_no"]&limit_page_length=100');
    contacts = res.data || [];
  } catch (e: any) {
    if (e?.message === 'NEXT_REDIRECT') throw e;
  }

  return (
    <div className="page-container">
      <ContactList initialContacts={contacts} />
    </div>
  );
}
