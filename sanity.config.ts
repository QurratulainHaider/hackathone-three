'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';

import { apiVersion, dataset, projectId } from '@/sanity/env';
import { schema } from '@/sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  projectId: projectId as string, // 🔹 Ensuring it’s a string
  dataset: dataset as string,
  schema,
  plugins: [
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
