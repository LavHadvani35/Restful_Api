const express = require("express");
require("./DB/conn");
const Student = require("./Models/students");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// // Create a New Students
// app.post("/students", (req,res) => {
//     console.log(req.body);
//     const user = Student(req.body);
// // Using Promises
//     user.save().then(() =>{
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

// Create a New Students
app.post("/students", async (req, res) => {
    // Using Async & Await
    try {
        const user = Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
})

// Read the Data Of Registered Students
app.get("/students", async (req, res) => {

    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})

// Get the Indivisual Student Data Using Id
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);

    } catch (e) {
        res.status(500).send(e);
    }
})

// Update the Students by Id
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body);
        res.send(updateStudents);
    } catch (e) {
        res.status(404).send(e);
    }
})

// Delete the Students
app.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log(`Connection is Setup at ${port}`);
})


