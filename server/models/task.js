const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = Task = mongoose.model('task', taskSchema);