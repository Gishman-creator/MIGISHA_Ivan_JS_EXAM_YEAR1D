const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./data');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/add", async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            position: req.body.position,
            company: req.body.company,
            businessArena: req.body.businessArena,  // Corrected field name
            employees: req.body.employees,
            streetNum: req.body.streetNum,
            additionalInfo: req.body.additionalInfo,
            zipCode: req.body.zipCode,
            country: req.body.country,  // Corrected field name
            code: req.body.code,
            phoneNumber: req.body.phoneNumber
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        console.error("Error saving task:", error);
        res.status(500).json({ message: "Error saving task" });
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
