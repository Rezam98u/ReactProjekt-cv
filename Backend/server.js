import mysql from 'mysql'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express();
app.use(cors())
    // app.use(cors({ credentials: true, origin: 'http://localhost:3003' }))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
    /////////////////////////////////// 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root111222',
    database: "crud2"
})
db.connect();


// Create a route to fetch data from the database
app.post('/login', (req, res) => {
    const { pass, email } = req.body
    db.query('SELECT * FROM data_db WHERE email = ? AND pass = ? ', [email, pass],
        (error, results) => {
            if (error) throw error;
            res.send(results);
        });
});

/// show status
db.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) {
        console.error('Error checking database status:', error);
    } else {
        console.log('Database status:', results[0].solution);
    }
});


app.post('/singUp', (req, res) => {
    const { pass, email } = req.body
    const sqlInsert = "INSERT INTO data_db (email, pass) VALUES (?, ?)"
    db.query(sqlInsert, [email, pass], (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
            res.status(500).send('Error inserting into database. Please try again later.');
        } else {
            console.log('Query result:', result)
            res.send('ok');
        }
    });
});



app.post('/fantasy', (req, res) => {
    db.query("SELECT * FROM fantasy", (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});




app.listen(3003, () => console.log("running on port 3003"))