import { Client, Databases } from "appwrite";
 
const client = new Client()
    .setEndpoint(process.env.VITE_ENDPOINT)
    .setProject(process.env.VITE_PROJECT_ID);
 
const databases = new Databases(client);

const collections = [
  {
      name: "notes",
      id: process.env.VITE_COLLECTION_NOTES_ID,
      dbId: process.env.VITE_DATABASE_ID
  },
];
 
export { client, databases , collections };