import type * as activities from './activities';
import { proxyActivities } from '@temporalio/workflow';
 
const {  getOrder } = proxyActivities<
  typeof activities
>({
  startToCloseTimeout: '10 seconds',
});
export async function fetchOrderWorkflow(orderId: number): Promise<void> {
    const orderData = await getOrder(orderId);
    console.log('Order Data:', orderData);
    return orderData
}
