// MongoDB connection
const mongoose = require('mongoose');
const config = require('config');
// grab mongoURI from default.json fiel
const db = config.get('mongoURI');
// const db = require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
        })

        console.log('Connected to Database')
    } catch (e) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
