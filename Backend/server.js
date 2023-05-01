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
    db.query('SELECT * FROM user WHERE email = ? AND pass = ? ', [email, pass],
        (error, results) => {
            if (error) throw error;
            if (results.length === 0) return res.status(404).json('user not found')
            res.send(results);
        });
});

/////// get from login
app.get('/login', (req, res) => {
    db.query('SELECT * FROM user',
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

//// Insert user
app.post('/singUp', (req, res) => {
    const { pass, email } = req.body
    const sqlInsert = "INSERT INTO user (email, pass) VALUES (?, ?)"
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

//////////// insert to fantasy
app.post('/fantasy', (req, res) => {
    const { fantasy, id } = req.body
    const sqlInsert = "INSERT INTO fantasy (fantasy , userId) VALUES (? , ?)"
    db.query(sqlInsert, [fantasy, id], (err, result) => {
        if (err) throw err;
        else {
            console.log('Query result:', result)
            res.send('ok');
        }
    });
});

//////// delete s.t in fantasy
app.post('/delete', (req, res) => {
    const { id } = req.body
    const sqlInsert = "DELETE FROM fantasy WHERE id = ?"
    db.query(sqlInsert, [id], (err, result) => {
        if (err) throw err;
        else {
            console.log('Query result:', result)
            res.send('ok');
        }
    });
});

/////////// get from fantasy
app.get('/fantasy', (req, res) => {
    const { userId } = req.query
    db.query("SELECT * FROM fantasy ", [userId], (error, results) => {
        if (error) throw error
        res.send(results)
    })
})

///// INSERT data to public
app.post('/public', (req, res) => {
    const { fantasy, id } = req.body
    const sqlInsert = "INSERT INTO public (publishedFantasy , userId) VALUES (? , ?) "
    db.query(sqlInsert, [fantasy, id], (err, result) => {
        if (err) throw err;
        else {
            console.log('Query result:', result)
            res.send('ok');
        }
    });
});

/////////// get from public
app.get('/public', (req, res) => {
    db.query("SELECT * FROM public ", (error, results) => {
        if (error) throw error
        res.send(results)
    })
})



app.listen(3003, () => console.log("running on port 3003"))