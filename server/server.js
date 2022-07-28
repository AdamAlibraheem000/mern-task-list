const express = require('express');
const connectDB = require('./config/db')
const app = express();

// Connect to DB
connectDB();

app.use(express.json({extended: false}))

// app.get('/', (req,res) => {
//     res.send("Hello World")
// })

const taskRouter = require('./routes/task_routes');
app.use('/task',taskRouter )

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})