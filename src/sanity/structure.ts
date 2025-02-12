// src/sanity/structure.ts
import type { StructureBuilder } from 'sanity/desk';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems());

export default structure; // 🔹 Default export karein