// src/sanity/sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema as schemaTypes } from '@/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'My Sanity Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool()],
  schema: schemaTypes,
});;