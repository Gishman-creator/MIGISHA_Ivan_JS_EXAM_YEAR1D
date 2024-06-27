const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./data'); 
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Existing POST route to add a new task
app.post("/add", async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            position: req.body.position,
            company: req.body.company,
            businessArena: req.body.businessArena,
            employees: req.body.employees,
            streetNum: req.body.streetNum,
            additionalInfo: req.body.additionalInfo,
            zipCode: req.body.zipCode,
            place: req.body.place,
            country: req.body.country,
            code: req.body.code,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        console.error("Error saving task:", error);
        res.status(500).json({ message: "Error saving task" });
    }
});

// Existing GET route to fetch all tasks
app.get('/all', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Error fetching tasks' });
    }
});

// New PUT route to update an existing task by _id
app.put("/update/:id", async (req, res) => {
    const taskId = req.params.id;
    const updateData = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, updateData, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Error updating task" });
    }
});

// New DELETE to delete an existing task by _id
app.delete("/delete/:id", async (req, res) => {
    const taskId = req.params.id;

    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Error deleting task" });
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
