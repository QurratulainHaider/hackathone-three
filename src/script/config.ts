import { createClient } from "next-sanity";

const config = {
  projectId: "knpfc91a",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: "skMlhFOAid9DEWGL2qkkWlqk8xzDe6HI6q43UWE75hQI6bqGvN4KUvsUtBZ4tSelcAtcsZlKfK7PUYva7MGmjQCHEXsvNTa6g3qBZD336WWxi4ueLNa05ppm9Zn5O1YWoOdJlGhCznhEyP15VgpZaRrCtsSgsS4vjFPRSGqdP7PtkJ5hfuaI", // Your actual Sanity token
  useCdn: false
};

export const client = createClient(config);