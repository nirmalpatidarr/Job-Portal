
const JobSchema = require("../../Model/schema/job")

const JobPost = async (req, res) => {
    // console.log(req.body,"body")
    const Job = new JobSchema(req.body);
    console.log(Job, "Job")
    const EmployerId=req.query.id

    try {
        console.log(EmployerId,"zzzz")
        if (!EmployerId || EmployerId == "") {
            return res.status(500).send({ Error: "", message: "Employer id req" });
        }
        if (!req.body.Job_Title || req.body.Job_Title == "") {
            return res.status(500).send({ Error: "", message: "Job title Required" });
        }
        if (!req.body.Job_Position || req.body.Job_Position == "") {
            return res.status(500).send({ Error: "", message: "Employer position required" });
        }
        else {
            await Job.save()
            return res.status(200).send({ Error: "", message: "", result: [Job] });
       }

    }
    catch (error) {
        return res.status(500).send({ Error: error, message: "something went wrong", result: [] });

    }
}




module.exports = { JobPost }
