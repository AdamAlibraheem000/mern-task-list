const express = require('express');
const connectDB = require('./config/db')
const app = express();
const path = require('path');

// Connect to DB
connectDB();

app.use(express.json({extended: false}))


const taskRouter = require('./routes/task_routes');
app.use('/tasks',taskRouter )

const port = process.env.mongoURI || 3001

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})