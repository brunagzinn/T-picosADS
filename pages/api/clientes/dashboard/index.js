// select count(*), sexo_pet from clientes group by sexo_pet;
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./data/database.db');

export default async function handler(req, res) {
    if (req.method === 'GET') {
        db.all(`select count(*) pets, sexo_pet from clientes group by sexo_pet`, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send(err.message);
                return;
            }
            res.json(rows);
        })
        return;

    } 

    res.status(405).end();
    return;
}

