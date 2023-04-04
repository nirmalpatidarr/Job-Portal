const EmpgetJob = require("../../Model/schema/job")
const EmpoGet = async (req, res) => {
    // const user = new userSchema({ _id: req.body.EmployerId });
    // console.log(user, "user")
    // employer getting jobs which is posted by themselves
    try {
        const jobTable = await EmpgetJob.find({ EmployerId: req.query.id })
        console.log(jobTable, "table")

        // jobTable && 
        if (jobTable.length) {

            return res.status(200).send({ message: "Job found", result: [jobTable] })
        }
        else {
            return res.status(400).send({ Error: "", result: [], message: "No Post Found" })
        }
    } catch (error) {
        res.status(500).send({ Error: error, result: [], message: "" })
    }

}



module.exports = { EmpoGet }
