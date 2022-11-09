const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Task = require('../models/Task');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Tasks using: GET "/api/notes/getuser". Login required
router.get('/fetchalltask', fetchuser, async (req, res) => {
    try {
        const notes = await Task.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Task using: POST "/api/notes/addnote". Login required
router.post('/addtask', fetchuser, [
    body('task', 'Enter a valid task').isLength({ min: 2 })],
    async (req, res) => {
        try {
            const { task } = req.body;
            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const newtask = new Task({
                task, user: req.user.id
            })
            const savedTask = await newtask.save()
            res.json(savedTask)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Task using: PUT "/api/notes/updatenote". Login required
router.put('/updatetask/:id', fetchuser, async (req, res) => {
    const { task } = req.body;
    try {
        // Create a newTask object
        const newTask = {};
        if (task) { newTask.task = task };

        // Find the note to be updated and update it
        let note = await Task.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Task.findByIdAndUpdate(req.params.id, { $set: newTask }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Task using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletetask/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let note = await Task.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Task
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Task.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Task has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router