const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
// Allows express to access form data
app.use(express.urlencoded({extended: false}))

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true
})

const connection = mongoose.connection;
connection.once("open", () => 
 console.log("Mongo connected"))

const taskRouter = require('./routes/task_routes');
app.use('/tasks',taskRouter )


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})