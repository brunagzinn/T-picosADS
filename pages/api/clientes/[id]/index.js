const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./data/database.db');

export default async function handler(req, res) {
    console.log(req.method)
    if (req.method === 'GET') {
        db.all(`select * from clientes where id = ${req.query.id}`, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send(err.message);
                return;
            }
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');

            res.json(rows[0] || null);
        })
        return;
    } else if (req.method === 'PUT') {
        const { nome_pet, nome_tutor, sexo_pet, endereco } = req.body;
        db.run(`    update clientes 
                    set nome_pet = ?,
                        nome_tutor = ?,
                        sexo_pet = ?,
                        endereco = ?
                    where id = ?
        `,
            [nome_pet, nome_tutor, sexo_pet, endereco, req.query.id],
            (err) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.status(201).end();

            })
        return;
    } else if (req.method === 'DELETE') {
        db.run(`    delete from clientes 
                    where id = ?
        `,
            [req.query.id],
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