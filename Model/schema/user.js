//                  user table schema is their

const { url } = require("inspector");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: false,
    },
    Mobile: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: false,
    },
    Skill: {
        type: String,
        required: false,
    },
    Password: {
        type: String,
        required: false,
    },
    Resume: {
        type: String,
        required: false,
    },
    Qualification: {
        type: String,
        required: false,
    },
    Organisation: {
        type: String,
        required: false,
    },
    Position: {
        type: String,
        required: false,
    },
    Emp_Company_Name: {
        type: String,
        required: false,
    },
    Company_Address: {
        type: String,
        required: false,
    },
    Expected_CTC:{
    type: String,
    required: false,
},
    Current_CTC:{
        type: String,
        required: false,
    },
    Country_id: {
        type: String,
        required: false,
    },
    State_id: {
        type: String,
        required: false,
    },
    Prefer_Work_Location: {
        type: String,
        required: false,
    }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;