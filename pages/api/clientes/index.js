const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./data/database.db');

export default async function handler(req, res) {
    if (req.method === 'GET') {
        db.all(`select * from clientes`, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send(err.message);
                return;
            }
            res.json(rows);
        })
        return;

    } else if (req.method === 'POST') {

        const { nome_pet, nome_tutor, sexo_pet, endereco } = req.body;

        db.run('insert into clientes (id, nome_pet, nome_tutor, sexo_pet, endereco) values ((select max(id) + 1 from clientes),?,?,?,?)',
            [nome_pet, nome_tutor, sexo_pet, endereco],
            (err) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.status(201).end();

            })
        return;
    }

    res.status(405).end();
    return;
}

