            // emp get applied jobs list of candidate//
const ApplySchema = require("../../Model/schema/jobApply")




const AppliedJobc = async (req, res) => {
     // connection is made btw tabel by using populate in query 
    // here in query we find job by employer id
    const Jobapply = await ApplySchema.find({ EmployerId: req.query.id }).populate("EmployerId").populate("Candidate_Id").populate("Job_Id")
    console.log(Jobapply, "data")
    try {
        if (Jobapply.length>0) {
            console.log(Jobapply.length)
            return res.status(200).send({ message: "Job found", result: Jobapply })
        }
        else {
            return res.status(400).send({ Error: "", result: [], message: "No job applied Found" })
        }
    }
    catch (error) {
        res.status(500).send({ Error: "error", result: [], message: "" })
    }


}
module.exports = {
    AppliedJobc
}