////         schema of aplying for job in that we have to make realtion between two table one is user and one is job

const mongoose = require("mongoose"),
//    import mongoose schema for geting mongodb tabel
    Schema = mongoose.Schema;

const ApplySchema = new mongoose.Schema({

    EmployerId: {
        //getting object emp id which was automatically created in database as employer id
        type: Schema.Types.ObjectId,
        //using table refrence from where to get
        ref: "User",
        required: true,
    },
    Candidate_Id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    Job_Id: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
   

}, {
    timestamps: {
        createdAt: 'created_date', updatedAt: 'updated_date'
    }
})
const Applied = mongoose.model("Applied", ApplySchema);

module.exports = Applied;