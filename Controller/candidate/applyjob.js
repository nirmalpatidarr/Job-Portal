
const jobApply = require("../../Model/schema/jobApply")


const Apply = async (req, res) => {
    const jobb = new jobApply(req.body);
    console.log({ Job_id: req.body.Job_Id, Candidate_Id: req.body.Candidate_Id }, "table")


    try {
        if (!req.body.EmployerId || req.body.EmployerId == "") {
            return res.status(500).send({ Error: "", message: "Employer id req" });
        }
        if (!req.body.Job_Id || req.body.Job_Id == "") {
            return res.status(500).send({ Error: "", message: "Job id Required" });
        }

        if (!req.body.Candidate_Id || req.body.Candidate_Id == "") {
            return res.status(500).send({ Error: "", message: "Candidate id req" });
        }
        const already = await jobApply.find({ Job_Id: req.body.Job_Id, Candidate_Id: req.body.Candidate_Id }).populate("Job_Id")
        console.log(jobApply, "geting")
        //candidate can't alow to apply on job double

        if (already.length > 0) {
            console.log(already.length, "if")
            return res.status(200).send({ Error: "", message: "Already applied by you" });
        }
        else {
            await jobb.save()
            return res.status(200).send({ Error: "", message: "Job applied", result: [jobb] });

        }



    }
    catch (error) {
        return res.status(500).send({ Error: error, message: "something went wrong", result: [] });

    }
}





module.exports = {
    Apply
}