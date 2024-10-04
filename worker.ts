import { NativeConnection, Worker } from '@temporalio/worker';
import * as activities from './activities';
import { fetchOrderWorkflow } from './workflow';
async function run() {
    const connection = await NativeConnection.connect({
    address: 'localhost:7233',
});
const worker = await Worker.create({
    connection,
    namespace: 'default',
    taskQueue: 'shopify-orders',
    workflowsPath: require.resolve('./workflow'),
    activities,
});

await worker.run();
}

run().catch((err) => {
console.error(err);
process.exit(1);
});

run();
