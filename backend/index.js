const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(express.json({limit: '25mb'}));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
console.log();

main().then(()=> console.log("mongodb is successfully connected.")).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
  
}

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})