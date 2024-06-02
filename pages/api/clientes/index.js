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
        const clientes = await collection.find().toArray();

        res.json(clientes);
        return;
    } else if (req.method === 'POST') {

        const { nome_pet, nome_tutor, sexo_pet, endereco } = req.body;

        try {
            await collection.insertOne({
                nome_pet: nome_pet,
                nome_tutor: nome_tutor,
                sexo_pet: sexo_pet,
                endereco: endereco
            })
            res.status(201).end();
            return;
        }
        catch (error) {
            if (error.errInfo.details.schemaRulesNotSatisfied) {
                const validacoes = error.errInfo.details.schemaRulesNotSatisfied.map((item) => item.propertiesNotSatisfied)
                
                
                res.status(400).json(validacoes[0].map((item) => item.description));
                return;
            }
            res.staus(500).json(error)
            return;
        }

    }

    res.status(405).end();
    return;
}

