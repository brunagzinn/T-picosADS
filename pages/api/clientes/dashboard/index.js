// select count(*), sexo_pet from clientes group by sexo_pet;
const { MongoClient } = require("mongodb");

const uri = process.env.CONNECTION_STRING;

const client = new MongoClient(uri);
await client.connect();
const dbName = "petshop";
const collectionName = "clientes";
const database = client.db(dbName);
const collection = database.collection(collectionName);

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    if (req.method === 'GET') {
        const pipeline = [
            {
                $group: {
                    _id: "$sexo_pet",
                    pets: { $sum: 1 }
                }
            }
        ];

        const result = await collection.aggregate(pipeline).toArray();
        res.json(result);
        return;

    }

    res.status(405).end();
    return;
}

