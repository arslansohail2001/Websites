import { MongoClient } from 'mongodb';

let dbInstance: any;
let client: MongoClient;

export async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }
  
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/precision_tech';
  client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Successfully connected to MongoDB Atlas!');
    dbInstance = client.db();
    return dbInstance;
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
    throw error;
  }
}

export function getClient() {
  return client;
}
