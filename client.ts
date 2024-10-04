// client.ts
import { Client } from '@temporalio/client';
import {fetchOrderWorkflow} from './workflow'
async function run() {


    const client = new Client();

    const orderId = 8668482863400; 
    const result = await client.workflow.start(fetchOrderWorkflow, {
        args: [orderId],
        taskQueue: 'shopify-orders',
        workflowId: 'number'
    });

    console.log(`Workflow started with ID: ${result.workflowId}`);
    const finalResult = await result.result(); 
    console.log(`Workflow result: ${finalResult}`);
}

run().catch((err) => {
    console.error('Error running workflow:', err);
    process.exit(1);
});
