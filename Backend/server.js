const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Reza111222@',
    database: "Crud2"

})

app.get('/api/Insert', (req, res) => {
    const sqlSelect = "SELECT * FROM crud2.data_db"
    db.query(sqlSelect, (err, result) => { console.log(result) })

})

app.post('/api/Insert', (req, res) => {
    // const id = req.body.id
    const pass = req.body.name
    const email = req.body.email

    const sqlInsert = "INSERT INTO Crud2 (pass, email) VALUE (?, ?) ";
    db.query(sqlInsert, [pass, email], ((err, result) => { console.log(result) }))

})


app.listen(3003, () => console.log("running on port 3003"))