const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./data/database.db');
export default function handler(req, res) {
    db.all(`SELECT id, nome_pet, nome_tutor, sexo_pet, endereco FROM clientes`, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.json(rows); 
    });
}