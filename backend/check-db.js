const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Fill:Fill%40.123@cluster0.rrxws2v.mongodb.net/?appName=Cluster0';
const client = new MongoClient(uri);

async function checkDb() {
  try {
    await client.connect();
    const db = client.db('precision_tech');
    
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
    
    const internships = await db.collection('internships').find({}).toArray();
    console.log('Internships:', internships);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkDb();
