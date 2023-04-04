                                            ///Job table Field schema // 

const { url } = require("inspector");
const mongoose = require("mongoose"),

    Schema = mongoose.Schema;
const JobSchema = new Schema({
 
    EmployerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
   
    Job_Title: {
        type: String,
        required: true,
    },
    Job_Description: {
        type: String,
        required: true,
    },
    Job_Position: {
        type: String,
        required: true,
    },
    Experince_Required: {
        type: String,
        required: true,
    },
    Job_Location: {
        type: String,
        required: true,
    },
    primary_Skill_Required: {
        type: String,
        required: true,
    },
    Secondary_Skill_Required: {
        type: String,
        required: true,
    },
    Mandatry_Skill: {
        type: String,
        required: true,
    },
    Qualification: {
        type: String,
        required: true,
    },
    Minimum_CTC: {
        type: String,
        required: true,
    },
    Maximum_CTC: {
        type: String,
        required: true,
    },
    Vacancy: {
        type: String,
        required: true,
    }



});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;