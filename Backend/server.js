import mysql from 'mysql'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


import nodemailer from 'nodemailer'
import randomToken from 'random-token'
// import "dotenv/config"
// import { graphqlHTTP } from 'express-graphql'
// import {
//     GraphQLSchema,
//     GraphQLObjectType,
//     GraphQLString,
//     GraphQLList,
//     GraphQLInt,
//     GraphQLNonNull
// } from 'graphql'

// import router from './routers/api'
// import { User } from './models/user'
//////////////////////////////////////////////////////////////////////////////////
const app = express();

///////////////////////// Mongo database and Email verification //////////////////
const MONGODB_URI = "mongodb+srv://root111:15H0rRro5uLFJcZQ@cluster0.rie8oh2.mongodb.net/?retryWrites=true&w=majority"
    // console.log(process.env.MONGODB_URI)
app.use(express.json())
app.use(cors())

const connectToMongo = async() => {
    await mongoose.connect(MONGODB_URI)
    console.log("Connected to MongoDB")
}
connectToMongo()

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isValid: {
        type: Boolean,
        // required: true
    },
    verificationToken: { type: String },
    purchased_products: Number
})
var User = mongoose.model('users', UserSchema)
User.createIndexes()

// const testAccount = nodemailer.createTestAccount()
// console.log(testAccount.user);

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    // secure: true, // true for 465, false for other ports
    auth: {
        user: 'reza.m2000u@gmail.com',
        pass: 'zdcrgqspdjptgmse',
    },
})

app.get("/", (req, res) => {
    res.send("App is Working")
        // You can check backend is working or not by
        // entering http://loacalhost:3003
        // If you see App is working means
        // backend working properly
})

app.post("/postUser", async(req, res) => {
    const verificationToken = randomToken(16)
    const { email, pass } = req.body
    try {
        const user = new User({
            email: email,
            password: pass,
            isValid: false,
            verificationToken: verificationToken,
            purchased_products: 0
        })

        const mailOptions = {
            from: 'onlineShopping@gmail.com',
            to: email,
            subject: 'Email Verification',
            text: `Please click the following link to verify your email: http://localhost:3003/verify/${verificationToken}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) throw Error(error)
            console.log('Email Sent Successfully')
                // console.log(info)
        })
        res.status(200).json({ message: 'Registration successful. Please check your email for verification instructions.' })
        await user.save()

    } catch (error) {
        res.json({ message: 'An error occurred.' })
    }
    // res.redirect("http://localhost:3002/AppShop")
})

app.post('/postUserGoogle', async(req, res) => {
    const { email } = req.body
    try {
        const user = new User({
            email: email,
            isValid: true,
        })
        await user.save()
    } catch (error) {
        res.status(500).json({ message: 'An error occurred.' })
    }
})

app.get("/verify/:verificationToken", async(req, res) => {
    const { verificationToken } = req.params
    console.log(verificationToken)
    const user = await User.findOne({ verificationToken: verificationToken })
    if (user) {
        user.isValid = true
        await user.save()
            // res.send("email is verified")
        res.redirect("http://localhost:3002/AppShop")
    } else { res.json("Invalid Token or user not found") }
})


app.get("/getDataMongoDb", async(req, res) => {
    try {
        const users = await User.find({})
        res.send({ data: users, status: "ok" })
    } catch (error) {
        console.log(error)
    }
})

app.post('/checkOut', async(req, res) => {
    const { email, total_item } = req.body
    const user = await User.findOneAndUpdate({ email: email })
    if (user) {
        user.purchased_products += total_item
        await user.save()
        res.status(200).json({ massage: total_item + " products are purchased" })
            // res.status(200).redirect("http://localhost:3002/AppShop")
    } else { res.json("Invalid user") }

})

///////////////////////////////// Email verification //////////////////////
// const testAccount = nodemailer.createTestAccount()
// console.log(testAccount.user);

// Endpoint for user registration
// app.post('/register', async(req, res) => {
//     try {
//         const { email } = req.body
//             // console.log(email)
//         const verificationToken = randomToken(16) // Implement your token generation logic

//         // Send a confirmation email
//         const mailOptions = {
//             from: 'onlineShopping@gmail.com',
//             to: email,
//             subject: 'Email Verification',
//             text: `Please click the following link to verify your email: http://localhost:3000/verify?token=${verificationToken}`,
//         };
//         await transporter.sendMail(mailOptions);

//         // Save the user and verification token in your database
//         // Implement your database logic here

//         res.status(200).json({ message: 'Registration successful. Please check your email for verification instructions.' })
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ message: 'An error occurred.' })

//     }
//     res.redirect("back")
// })

///////////////////////////////// GraphQl /////////////////////////////////  

//         "id": "bitcoin",
//     "symbol": "btc",
//       "name": "Bitcoin",

// const BookType = new GraphQLObjectType({
//     name: 'Book',

//     fields: () => ({
//         id: { type: GraphQLNonNull(GraphQLString) },
//         symbol: { type: GraphQLNonNull(GraphQLString) },
//         name: { type: GraphQLNonNull(GraphQLString) },
//         author: {
//             type: AuthorType,
//             resolve: (book) => {
//                 return authors.find(author => author.id === book.authorId)
//             }
//         }
//     })
// })


// const resolver = { Query: }

// const helloWorldType = new GraphQLObjectType({
//     name: "helloWorld",
//     fields: () => ({
//         message: {
//             type: GraphQLString,
//             resolve: () => 'helloWorld'
//         }
//     })
// })

// const CoinType = new GraphQLObjectType({
//     name: 'CoinType',
//     fields: () => ({
//         id: { type: GraphQLNonNull(GraphQLInt) },
//         name: { type: GraphQLNonNull(GraphQLString) }
//     })
// })


// const schema = new GraphQLSchema({
//     query: helloWorldType

// })

// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     graphiql: true
// }))





///////////////////////////////// MySql database /////////////////////////////////
// app.use(cors())
//     // app.use(cors({ credentials: true, origin: 'http://localhost:3003' }))

// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root111222',
    database: "crud2"
})
db.connect();


////////// Create a route to fetch data from the database 
app.post('/login', (req, res) => {
    const { pass, email } = req.body
    db.query('SELECT * FROM user WHERE email = ? AND pass = ? ', [email, pass],
        (error, results) => {
            if (error) throw error;
            if (results.length === 0) return res.status(404).json('user not found')
            res.send(results);
        });
});

////////// get from login
app.get('/login', (req, res) => {
    db.query('SELECT * FROM user',
        (error, results) => {
            if (error) throw error;
            res.send(results);
        });
});


////////// show status
db.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) {
        console.error('Error checking database status:', error);
    } else {
        console.log('Database status:', results[0].solution);
    }
});

////////// Insert into user
// app.post('/singUp', (req, res) => {
//     const { pass, email } = req.body
//     const sqlInsert = "INSERT INTO user (email, pass) VALUES (?, ?)"
//     db.query(sqlInsert, [email, pass], (err, result) => {
//         if (err) {
//             console.error('Error inserting into database:', err);
//             res.status(500).send('Error inserting into database. Please try again later.');
//         } else {
//             console.log('Query result:', result)
//             res.send('ok');
//         }
//     });
// });

////////// insert to fantasy
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

////////// delete s.t in fantasy
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

////////// get from fantasy
app.get('/fantasy', (req, res) => {
    db.query("SELECT * FROM fantasy ", (error, results) => {
        if (error) throw error
        res.send(results)
    })
})

////////// INSERT data to public
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

////////// get from public
app.get('/public', (req, res) => {
    db.query("SELECT * FROM public ", (error, results) => {
        if (error) throw error
        res.send(results)
    })
})


////////// Insert Image 
app.post('/image', (req, res) => {
    const { userId, profilePhoto } = req.body
    const sqlInsert = "UPDATE user SET image = ? WHERE userId = ? "
    db.query(sqlInsert, [profilePhoto, userId], (err, result) => {
        if (err) throw err;
        else {
            console.log('Query result:', result)
            res.send('ok');
        }
    });
});

////////// get image
app.get('/image', (req, res) => {
    db.query("SELECT * FROM user ", (error, results) => {
        if (error) throw error
        res.send(results)
    })
})






app.listen(3003, () => console.log("running on port 3003"))