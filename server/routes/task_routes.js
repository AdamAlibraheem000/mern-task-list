const express = require('express')
const router = express.Router();

// Import model
const Task = require('../models/task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
       const task =  await Task.find()
        res.json(task);
    } catch (e) {
        res.status(400).json(`Error: ${e}`)
    }
})

// Add new task
router.post('/add', async (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        desc: req.body.desc
    })

    try {
        await newTask.save();
        res.json("New Task added")
    } catch (e) {
        res.status(400).json(`Error: ${e}`)
    }
})


// Delete Task
router.delete('/delete/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.json("Task has been deleted")
    } catch (e) {
        res.status(400).json(`Error: ${e}`)
    }
})

module.exports = router;