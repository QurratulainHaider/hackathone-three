/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli';

// Read environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

// Check if environment variables are defined
if (!projectId || !dataset) {
  throw new Error(
    'Missing environment variables. Please check your .env file.'
  );
}

// Export the CLI configuration
export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});