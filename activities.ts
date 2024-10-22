import axios from 'axios'; 

const shopifyAdmin = 'vtldeveloper.myshopify.com';
const shopifyBooby = '2023-07';
const url = `https://${shopifyAdmin}/admin/api/${shopifyBooby}`;
const accessToken = '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';
const headers = {
  'Content-Type': 'application/json',
  'X-Shopify-Access-Token': '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'
};
export async function getOrder(id: number): Promise<any> {
        const response = await axios.get(`${url}/products/${id}.json`, { headers });
        const data = response.data;
        console.log(data);
        return data;
}
// const orderId = 8668482863400;
// getOrder(orderId);
