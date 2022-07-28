const express = require('express');
const connectDB = require('./config/db')
const app = express();

const port = process.env.PORT || 3001

// Connect to DB
connectDB();

app.use(express.json({extended: false}))

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})