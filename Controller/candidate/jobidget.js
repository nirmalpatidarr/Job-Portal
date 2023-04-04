const getJob = require("../../Model/schema/job")





const JobId = async (req, res) => {
    const id = req.params.id
    try {

        // makin connection btwn two controller or tabel job and employer
        const jobTable = await getJob.findById(id).populate("EmployerId")
        console.log(id, "joid")
        if (jobTable) {

            return res.status(200).send({ message: "Job found", result: [jobTable] })
        }
        else {
            return res.status(200).send({ Error: "", result: [], message: "No job Post Found" })
        }



    } catch (error) {

        res.status(500).send({ Error: error, result: [], message: "No Post Found" })
    }
}
module.exports = { JobId }