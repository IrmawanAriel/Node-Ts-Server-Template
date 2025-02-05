import dotenv from 'dotenv';
import { CronJob } from 'cron';  // Corrected import
dotenv.config();

export const updateRecordHandler = async () => {
    job.start();
}

const job = new CronJob('* * * * * *', async () => {
    console.log('Job is started');
});
