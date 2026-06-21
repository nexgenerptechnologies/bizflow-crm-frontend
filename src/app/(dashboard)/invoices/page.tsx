import { fetchFrappe } from "@/lib/frappe";
import InvoiceList from "./InvoiceList";

export const dynamic = "force-dynamic";

export default async function InvoicesPage() {
  let invoices = [];
  let items = [];
  let quotations = [];
  try {
    const invData = await fetchFrappe('BizFlow GST Invoice?fields=["name","customer_name","date","total_taxes","grand_total","payment_status"]&limit_page_length=100');
    invoices = invData.data || [];
    
    const iData = await fetchFrappe('BizFlow Item?fields=["name","item_name","item_code","selling_price"]&limit_page_length=100');
    items = iData.data || [];

    const qData = await fetchFrappe('BizFlow Quotation?fields=["name","customer_name"]&limit_page_length=100');
    quotations = qData.data || [];
  } catch(e: any) {
    if (e?.message === 'NEXT_REDIRECT') throw e;
  }

  return (
    <div className="page-container">
      <InvoiceList initialInvoices={invoices} availableItems={items} availableQuotations={quotations} />
    </div>
  );
}
