const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// Middleware setup
app.use(express.json({limit: '25mb'}));
// app.use(express.urlencoded({limit: '25mb'}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// all routes
const authRoute = require('./src/users/user.route');
const productRoute = require('./src/products/products.route');

app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);


main().then(()=> console.log("mongodb is successfully connected.")).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
  
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})