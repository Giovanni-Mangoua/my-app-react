const express = require('express') 
const app = express ()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const sqlite = require('sqlite3')
const cors = require('cors')

const PORT = 5000

//MyBase de donnee
//1- connexion de la base
var db = new sqlite.Database('database.db');

// Création de la table pour stocker les fichiers
db.serialize( function () {
    db.run('CREATE TABLE IF NOT EXISTS Todo (id INTEGER PRIMARY KEY AUTOINCREMENT,tache TEXT)');
});

var databaseData = [];

app.use(bodyParser.json())
.use(cors())
.use(bodyParser.urlencoded({extended:true}))
.post('/form',(req,res) => {
    if (req.body !== '') {
        db.run('INSERT INTO Todo (tache) VALUES (?)',[req.body.tache])
    }
    //res.redirect('http://localhost:3000/')
})
.get('/effacer/data/:id' , (req,res) => {
    var stmt = db.prepare('DELETE FROM Todo WHERE id = (?)');
    stmt.run(req.params.id)
    res.redirect('http://localhost:3000/')
})
.get('/send/data', (req,res) => {
    db.each('SELECT * FROM Todo' , function (err,row) {
        databaseData.push({id:row.id,tache:row.tache})
    })
    res.json(databaseData)
})
.use ( (req,res,next) => {
    res.setHeader('Content-Type','text/html')
    res.status(404).send('<center><h1><strong>Page Introuvable!</strong></h1></center>')
});


server.listen(PORT);