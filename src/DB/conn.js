const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
.then(() => {
    console.log("Connection is Successfully !!!");
}).catch((e) => {
    console.log("Error to Connect Database !!!");
})