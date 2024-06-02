const { MongoClient } = require("mongodb");
const { ObjectId } = require('mongodb');

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

        const id = req.query.id;
        const findQuery = { _id: ObjectId.createFromHexString(id) };
        const cliente = await collection.findOne(findQuery)
        res.json(cliente ?? null);

        return;
    } else if (req.method === 'PUT') {
        const { nome_pet, nome_tutor, sexo_pet, endereco } = req.body;

        const id = req.query.id;
        const findQuery = { _id: ObjectId.createFromHexString(id) };

        try {
            await collection.findOneAndUpdate(findQuery, {
                $set: {
                    nome_pet: nome_pet,
                    nome_tutor: nome_tutor,
                    sexo_pet: sexo_pet,
                    endereco: endereco
                }
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
    } else if (req.method === 'DELETE') {

        const id = req.query.id;
        const findQuery = { _id: ObjectId.createFromHexString(id) };
        await collection.deleteOne(findQuery)
        res.status(201).end();

        return;
    }

    res.status(405).end();
    return;
}