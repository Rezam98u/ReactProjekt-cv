import mysql from 'mysql'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express();
// app.use(cors('http://localhost:3003/data_db'))
app.use(cors({ credentials: true, origin: 'http://localhost:3003' }))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
    /////////////////////////////////// 
    //database connection
    // const config = {
    //     user: 'root',
    //     password: 'Reza111222@',
    //     server: 'host',
    //     database: 'crud2',
    // };

// mysql.connect(config, function(err) {
//     if (err) console.log(err);
// });


// app.get('/data', (req, res) => {

//     mysql.connect(config, function(err) {
//         if (err) console.log(err);
//         const request = new mysql.Request();
//         request.query('SELECT * FROM data_db', function(err, result) {
//             if (err) console.log(err);
//             res.json(result.recordset);
//         });
//     });
// });


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Reza111222@',
    database: "crud2"
})

db.connect();

// app.get('/', (req, res) => {
//     const sqlSelect = "SELECT * FROM crud2.data_db"
//     db.query(sqlSelect, (err, result) => { console.log(result) })
// })


app.post('/data_db', (req, res) => {
    const { pass, email } = req.body

    const sqlInsert = "INSERT INTO data_db (pass, email) VALUES (?, ?)"
    db.query(sqlInsert, [pass, email], (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
            res.status(500).send('Error inserting into database. Please try again later.');
        } else {
            console.log('Query result:', result)
            res.send('ok');
        }
    });
});

// app.post('/data_db', (req, res) => {
//     // const id = req.body.
//     // const pass = req.body.name
//     // const email = req.body.email
//     const { pass, email } = req.body

//     const sqlInsert = "INSERT INTO data_db ( pass, email) VALUES (?, ?)"
//     db.query(sqlInsert, [pass, email], (error, result) => {
//         console.log('error', error)
//         console.log('result', result)
//     })


//     res.send('ok')
// })

// app.get('/', (req, res) => {
//     // const id = req.body.
//     // const pass = req.body.name
//     // const email = req.body.email
//     const { pass, email } = req.body


//     const sqlInsert = "INSERT INTO data_db (pass, email) VALUES ('rezmo' , 'resdfsdf') ";
//     db.query(sqlInsert, (err, result) => {
//         console.log('error', err)
//         console.log('result', result)
//     })

//     res.send('ok')

//     // db.query(sqlInsert, [pass, email], ((err, result) => { console.log(result) }))

// })

app.listen(3003, () => console.log("running on port 3003"))