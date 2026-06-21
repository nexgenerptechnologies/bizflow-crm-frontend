const url = `${process.env.NEXT_PUBLIC_FRAPPE_URL}/api/resource/BizFlow Item`;
const token = `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`;

const createItem = async (code, name, price) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { "Authorization": token, "Content-Type": "application/json" },
    body: JSON.stringify({ item_code: code, item_name: name, selling_price: price })
  });
  console.log(await res.text());
};

createItem('SVC-001', 'Website Development', 50000);
createItem('SVC-002', 'SEO Retainer', 15000);
createItem('PROD-001', 'Enterprise CRM Software', 120000);
