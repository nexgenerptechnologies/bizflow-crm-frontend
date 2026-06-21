import { fetchFrappe } from "@/lib/frappe";
import QuotationList from "./QuotationList";

export const dynamic = "force-dynamic";

export default async function QuotationsPage() {
  let quotations = [];
  let items = [];
  try {
    const qData = await fetchFrappe('BizFlow Quotation?fields=["name","customer_name","date","total_amount"]&limit_page_length=100');
    quotations = qData.data || [];
    
    const iData = await fetchFrappe('BizFlow Item?fields=["name","item_name","item_code","selling_price"]&limit_page_length=100');
    items = iData.data || [];
  } catch(e: any) {
    if (e?.message === 'NEXT_REDIRECT') throw e;
  }

  return (
    <div className="page-container">
      <QuotationList initialQuotations={quotations} availableItems={items} />
    </div>
  );
}
