const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
        minength : 3
    },
    Email : {
        type : String,
        required : true,
        unique : [true, "Email Id is Already Present."],
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email Id.")
            }
        }
    },
    Phone : {
        type : Number,
        required : true,
        min : 10,
       // max : 10,
        unique : true
    },
    Address : {
        type : String,
        required : true
    }
})

// Create a New Collection
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;