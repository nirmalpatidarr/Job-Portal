const ApplySchema = require("../../Model/schema/jobApply")

const AppliedJob = async (req, res) => {

   // connection is made btw tabel by using populate in query
   // here in query we find job by employer id

    const Jobapply = await ApplySchema.find({ Candidate_Id: req.query.id  }).populate("EmployerId").populate("Candidate_Id").populate("Job_Id")
    console.log(Jobapply, "da")
    try {
        // .length is used for finding length of that array
        if (Jobapply.length>0) {
           
            return res.status(200).send({ message: "Job found", result: Jobapply })
        }
        else {
            return res.status(400).send({ Error: "", result: [], message: "No Post Found" })
        }
    }
    catch (error) {
        res.status(500).send({ Error: "error", result: [], message: "" })
    }


}






module.exports = {
    AppliedJob
}