import axios from 'axios'; 

const shopifyAdmin = 'vtlclothingstore.myshopify.com';
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
