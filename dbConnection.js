const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.CONNECTION_STRING;
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1, strict: true, deprecationErrors: true,
    } 
});

client.connect();

module.exports = client;