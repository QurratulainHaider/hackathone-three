import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

if (!projectId) {
  console.error('Project ID is missing in environment variables');
}

export const client = createClient({
  projectId: projectId || '',  // Add a fallback empty string
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
});