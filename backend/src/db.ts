import { MongoClient } from 'mongodb';

let dbInstance: any;
let client: MongoClient;

export async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }
  
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
  client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Successfully connected to MongoDB Atlas!');
    // The user is looking at the 'test' database in Atlas
    dbInstance = client.db('test'); 
    return dbInstance;
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
    throw error;
  }
}

export function getClient() {
  return client;
}
